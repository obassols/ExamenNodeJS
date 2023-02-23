const db = require('../Database/Utils/Usuari');

const getAllUsuaris = (async () => {
  try {
    const usuaris = await db.getAllUsuaris();
    return usuaris;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    };
  }
});

/* const getOneEstoc = (async (id) => {
  const estoc = await db.getOneEstoc(id);
  return estoc;
});
 */

const createNewUsuari = (async (usuari) => {
  try {
    await db.createNewUsuari(usuari.id, usuari.username, usuari.fullName, usuari.createdAt);
    return usuari;

  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    };
  }
});

/* const updateOneEstoc = (async (idEstoc, canvis) => {
  try {
    const updatedAt = new Date().toLocaleDateString("en-US", { timeZone: "UTC" });
    const updatedEstoc = await db.updateOneEstoc(idEstoc, canvis.producte, canvis.caducitat, canvis.datavenda, canvis.ubicacio, updatedAt);
    return updatedEstoc;
  } catch (error) {
    throw error;
  }
}); */

const deleteOneUsuari = (async (idEsidUsuaritoc) => {
  try {
    const deletedUsuari = await db.getOneUsuari(idUsuari);
    await db.deleteOneUsuari(idUsuari);
    return deletedUsuari;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    };
  }
});

const getUsuariTasques = (async (idUsuari) => {
  try {
    const tasques = await db.getUsuariTasques(idUsuari);
    return tasques;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    };
  }
});

module.exports = {
  getAllUsuaris,
  // getOneEstoc,
  createNewUsuari,
  // updateOneEstoc,
  deleteOneUsuari,
  getUsuariTasques,
};