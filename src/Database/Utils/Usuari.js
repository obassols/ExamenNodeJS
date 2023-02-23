const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('src/Database/ExamenNodeJS.db');

const getAllUsuaris = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM Users`;
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

const getOneUsuari = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Users WHERE id = ?';
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

const createNewUsuari = (id, username, fullName, createdAt) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO Users (id, username, fullName, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)';
    const values = [id, username, fullName, createdAt, createdAt];
    db.run(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const deleteOneUsuari = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM Users WHERE id = ?';
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

const getUsuariTasques = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Tasks WHERE user = ?';
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
  getAllUsuaris,
  getOneUsuari,
  createNewUsuari,
  deleteOneUsuari,
  getUsuariTasques,
};