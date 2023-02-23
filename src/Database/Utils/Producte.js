const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('src/Database/MaquinesExpen.db');

const getAllProductes = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM Producte`;
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

const getOneProducte = (nom) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Producte WHERE nom = ?';
    const values = [nom];
    db.get(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const createNewProducte = (nom, tipus, preu, categoria, createdAt) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO Producte (nom, tipus, preu, categoria, createdAt, updatedAt) VALUES (?, ?, ?, ?, ? ,?)';
    const values = [nom, tipus, preu, categoria, createdAt, createdAt];
    db.run(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const updateOneProducte = (nom, canviNom, tipus, preu, categoria, updatedAt) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE Producte SET nom = ?, tipus = ?, preu = ?, categoria = ?, updatedAt = ? WHERE nom = ?';
    const values = [canviNom, tipus, preu, categoria, updatedAt, nom];
    db.run(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const deleteOneProducte = (nom) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM Producte WHERE nom = ?';
    const values = [nom];
    db.run(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const getProducteEstocs = (nomProducte) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Estoc WHERE Producte = ?';
    const values = [nomProducte];
    db.all(query, values, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const getProducteEstocsDisponibles = (nomProducte) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Estoc WHERE Producte = ? AND "Data Venda" IS NULL';
    const values = [nomProducte];
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
  getAllProductes,
  getOneProducte,
  createNewProducte,
  updateOneProducte,
  deleteOneProducte,
  getProducteEstocs,
  getProducteEstocsDisponibles,
};