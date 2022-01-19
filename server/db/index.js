const db = require('./db');
const Book = require('./Book');

// If we were to create any associations between different tables
// this would be a good place to do that:

module.exports = {
  db,
  Book,
};
