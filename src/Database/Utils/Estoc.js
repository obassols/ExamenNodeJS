const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('src/Database/MaquinesExpen.db');

const getAllEstocs = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM Estoc`;
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

const getOneEstoc = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Estoc WHERE id = ?';
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

const createNewEstoc = (id, producte, caducitat, dataVenda, ubicacio, createdAt) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO Estoc (id, producte, caducitat, "data venda", ubicacio, createdAt, updatedAt) VALUES (?, ?, ?, ?, ? ,?, ?)';
    const values = [id, producte, caducitat, dataVenda, ubicacio, createdAt, createdAt];
    db.run(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const updateOneEstoc = (id, producte, caducitat, dataVenda, updatedAt) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE Producte SET producte = ?, caducitat = ?, "data venda" = ?, updatedAt = ? WHERE id = ?';
    const values = [producte, caducitat, dataVenda, updatedAt, id];
    db.run(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const deleteOneEstoc = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM Estoc WHERE id = ?';
    const values = [id];
    db.run(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const getAllEstocsVenda = (dataVenda) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM Estoc WHERE "Data Venda" IS ?`;
    const values = [dataVenda];
    db.all(query, values, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const getAllEstocsDisponibles = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM Estoc WHERE "Data Venda" IS NULL`;
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

module.exports = {
  getAllEstocs,
  getOneEstoc,
  createNewEstoc,
  updateOneEstoc,
  deleteOneEstoc,
  getAllEstocsVenda,
  getAllEstocsDisponibles,
};