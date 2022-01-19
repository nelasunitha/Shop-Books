//const { VIRTUAL } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('./db');

// Adding  Sequelize fields here
const Book = db.define('books', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },


  author: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
  genre: {
    type: Sequelize.STRING,
    },
    publishedYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: false,
    },

  },

})

module.exports = Book;