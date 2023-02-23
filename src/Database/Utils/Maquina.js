const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('src/Database/MaquinesExpen.db');

const getAllMaquines = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM Maquina`;
    const values = [];
    db.all(query, values, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const getOneMaquina = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Maquina WHERE id = ?';
    const values = [id];
    db.get(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const getMaquinaEstocs = (id) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT Estoc.* FROM CALAIX 
    LEFT JOIN "Estoc" ON "CALAIX"."id" = "Estoc"."ubicacio"
    WHERE "Maquina" = ?`;
    const values = [id];
    db.all(query, values, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const getMaquinaEstocsDisponibles = (id) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT Estoc.* FROM CALAIX
    LEFT JOIN "Estoc" ON "CALAIX"."id" = "Estoc"."ubicacio"
    WHERE "Maquina" = ? AND "Estoc"."Data Venda" IS NULL`;
    const values = [id];
    db.all(query, values, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const getMaquinaCalaixos = (id) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM CALAIX WHERE "Maquina" = ?`;
    const values = [id];
    db.all(query, values, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const getMaquinaCalaixosBuits = (id) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT CALAIX.* FROM CALAIX 
    RIGHT JOIN "Estoc" ON "CALAIX"."id" = "Estoc"."ubicacio" AND "Estoc"."Data Venda" IS NOT NULL
    WHERE "Maquina" = ?`;
    const values = [id];
    db.all(query, values, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

module.exports = {
  getAllMaquines,
  getOneMaquina,
  getMaquinaEstocs,
  getMaquinaEstocsDisponibles,
  getMaquinaCalaixos,
  getMaquinaCalaixosBuits,
};