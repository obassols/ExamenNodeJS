const db = require('../Database/Utils/Maquina');

const getAllMaquines = (async () => {
  const maquines = await db.getAllMaquines();
  return maquines;
});

const getOneMaquina = (async (id) => {
  const maquina = await db.getOneMaquina(id);
  return maquina;
});

const getMaquinaEstocs = (async (id) => {
  const estocs = await db.getMaquinaEstocs(id);
  return estocs;
});

const getMaquinaEstocsDisponibles = (async (id) => {
  const estocsDisponibles = await db.getMaquinaEstocsDisponibles(id);
  return estocsDisponibles;
});

const getMaquinaCalaixos = (async (id) => {
  const calaixos = await db.getMaquinaCalaixos(id);
  return calaixos;
});

const getMaquinaCalaixosBuits = (async (id) => {
  const calaixosBuits = await db.getMaquinaCalaixosBuits(id);
  return calaixosBuits;
});

module.exports = {
  getAllMaquines,
  getOneMaquina,
  getMaquinaEstocs,
  getMaquinaEstocsDisponibles,
  getMaquinaCalaixos,
  getMaquinaCalaixosBuits,
};