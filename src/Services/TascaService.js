const db = require('../Database/Utils/Tasca');

const getOneTasca = (async (idTasca) => {
  try {
    const tasca = await db.getOneTasca(idTasca);
    return tasca;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    };
  }
});

const createNewTasca = (async (tasca) => {
  try {
    await db.createNewTasca(tasca.id, tasca.user, tasca.title, tasca.description, tasca.status, tasca.createdAt);
    return tasca;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    };
  }
});

const updateOneTasca = (async (idTasca, canvis) => {
  try {
    const updatedAt = new Date().toLocaleDateString("en-US", { timeZone: "UTC" });
    await db.updateOneTasca(idTasca, canvis.user, canvis.title, canvis.description, canvis.status, updatedAt);
    const updatedTasca = await db.getOneTasca(idTasca);
    return updatedTasca;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    };
  }
});

const deleteOneTasca = (async (idTasca) => {
  try {
    const deletedTasca = await db.getOneTasca(idTasca);
    await db.deleteOneTasca(idTasca);
    return deletedTasca;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    };
  }
});

module.exports = {
  getOneTasca,
  createNewTasca,
  updateOneTasca,
  deleteOneTasca,
};
