const db = require('../Database/Utils/Producte');

const getAllProductes = (async () => {
  const productes = await db.getAllProductes();
  return productes;
});

const getOneProducte = (async (nom) => {
  const producte = await db.getOneProducte(nom);
  return producte;
});

const createNewProducte = (async (producte) => {
  const isAlreadyAdded = await db.getOneProducte(producte.nom);
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Producte amb el nom '${producte.nom}' ja existeix`,
    };
  }
  try {
    const createdAt = new Date().toLocaleDateString("en-US", { timeZone: "UTC" });
    await db.createNewProducte(producte.nom, producte.tipus, producte.preu, producte.categoria, createdAt);
    return producte;

  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    };
  }
});

const updateOneProducte = (async (nomProducte, canvis) => {
  try {
    const updatedAt = new Date().toLocaleDateString("en-US", { timeZone: "UTC" });
    const updatedProducte = await db.updateOneProducte(nomProducte, canvis.nom, canvis.tipus, canvis.preu, canvis.categoria, updatedAt);
    return updatedProducte;
  } catch (error) {
    throw error;
  }
});

const deleteOneProducte = (async (nomProducte) => {
  try {
    const deletedProducte = await db.getOneProducte(nomProducte); 
    await db.deleteOneProducte(nomProducte);
    return deletedProducte;
  } catch (error) {
    throw error;
  }
});

const getProducteEstocs = (async (nomProducte) => {
  try {
    const estocs = await db.getProducteEstocs(nomProducte);
    return estocs;
  } catch (error) {
    throw error;
  }
});

const getProducteEstocsDisponibles = (async (nomProducte) => {
  try {
    const estocs = await db.getProducteEstocsDisponibles(nomProducte);
    return estocs;
  } catch (error) {
    throw error;
  }
});


module.exports = {
  getAllProductes,
  getOneProducte,
  createNewProducte,
  updateOneProducte,
  deleteOneProducte,
  getProducteEstocs,
  getProducteEstocsDisponibles,
};