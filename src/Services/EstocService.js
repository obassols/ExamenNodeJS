const db = require('../Database/Utils/Estoc');

const getAllEstocs = (async () => {
  const estocs = await db.getAllEstocs();
  return estocs;
});

const getOneEstoc = (async (id) => {
  const estoc = await db.getOneEstoc(id);
  return estoc;
});

const createNewEstoc = (async (estoc) => {
  try {
    const createdAt = new Date().toLocaleDateString("en-US", { timeZone: "UTC" });
    await db.createNewEstoc(estoc.id, estoc.producte, estoc.caducitat, estoc.dataVenda, estoc.ubicacio, createdAt);
    return estoc;

  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    };
  }
});

const updateOneEstoc = (async (idEstoc, canvis) => {
  try {
    const updatedAt = new Date().toLocaleDateString("en-US", { timeZone: "UTC" });
    const updatedEstoc = await db.updateOneEstoc(idEstoc, canvis.producte, canvis.caducitat, canvis.datavenda, canvis.ubicacio, updatedAt);
    return updatedEstoc;
  } catch (error) {
    throw error;
  }
});

const deleteOneEstoc = (async (idEstoc) => {
  try {
    const deletedEstoc = await db.getOneEstoc(idEstoc);
    await db.deleteOneEstoc(idEstoc);
    return deletedEstoc;
  } catch (error) {
    throw error;
  }
});

const getAllEstocsVenda = (async (dataVenda) => {
  const estocs = await db.getAllEstocsVenda(dataVenda);
  return estocs;
});

const getAllEstocsDisponibles = (async () => {
  const estocs = await db.getAllEstocsDisponibles();
  return estocs;
});

module.exports = {
  getAllEstocs,
  getOneEstoc,
  createNewEstoc,
  updateOneEstoc,
  deleteOneEstoc,
  getAllEstocsVenda,
  getAllEstocsDisponibles,
};