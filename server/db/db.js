// The sole purpose of this module is to establish a connection to
// Postgres database by creating a Sequelize instance (called `db`).


const Sequelize = require('sequelize');
const pkg = require('../../package.json');


const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}_test` : pkg.name;
console.log((`Opening database connection to ${dbName}`));

const db = new Sequelize(`postgres://localhost:5432/${dbName}`, {
  logging: false,
});

module.exports = db;
