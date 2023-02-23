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

const deleteOneUsuari = (async (idUsuari) => {
  try {
    const usuariTasks = await db.getUsuariTasques(idUsuari);
    if (usuariTasks.length > 0) {
      throw {
        status: 400,
        message: 'Usuari amb tasques'
      };
    } else {
      const deletedUsuari = await db.getOneUsuari(idUsuari);
      await db.deleteOneUsuari(idUsuari);
      return deletedUsuari;
    }
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
  createNewUsuari,
  deleteOneUsuari,
  getUsuariTasques,
};