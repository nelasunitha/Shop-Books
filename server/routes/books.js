const router = require('express').Router();
// const { ne } = require('sequelize/types/lib/operators');
const { Book } = require('../db');

router.get('/books', async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
});

router.post('/books', async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    res.json(newBook);
  } catch (err) {
    next(err);
  }
});

router.get('/books/:id', async (req, res, next) => {
  console.log(req.params);
  try {
    const book = await Book.findByPk(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
});

router.put('/books/:id', async (req, res, next) => {
  try {
    const updatedBook = await Book.findByPk(req.params.id);
    res.json(await updatedBook.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete('/books/:id', async (req, res, next) => {
  try {
    const deletedBook = await Book.destroy({
      where: { id: req.params.id },
    });
    if (!deletedBook) {
      console.log("The item not existing")
      next({ status: 403 });
    }
    console.log("The item deleted")
    res.json(deletedBook);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
