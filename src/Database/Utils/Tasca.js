const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('src/Database/ExamenNodeJS.db');

const getOneTasca = (idTasca) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Tasks WHERE id = ?';
    const values = [idTasca];
    db.get(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const createNewTasca = (id, user, title, description, status, createdAt) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO Tasks (id, user, title, description, status, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [id, user, title, description, status, createdAt, createdAt];
    db.run(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const updateOneTasca = (idTasca, user, title, description, status, updatedAt) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE Tasks SET user = ?, title = ?, description = ?, status = ?, updatedAt = ? WHERE id = ?';
    const values = [user, title, description, status, updatedAt, idTasca];
    db.run(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const deleteOneTasca = (idTasca) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM Tasks WHERE id = ?';
    const values = [idTasca];
    db.run(query, values, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

module.exports = {
  getOneTasca,
  createNewTasca,
  updateOneTasca,
  deleteOneTasca,
};
