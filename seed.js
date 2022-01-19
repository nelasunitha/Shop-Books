const db = require('./server/db/db');
const Book = require('./server/db/Book');
const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log('db synced!');

    //creating Posts
    const book1 = await Book.create({
      name: 'To Kill a Mockingbird',
      author: ' Harper Lee',
      genre: 'Gothic',
      publishedYear: 1960,
      price: 24.99,
    });
    const book2 = await Book.create({
      name: 'Pride and Prejudice',
      author: ' Jane Austen',
      genre: 'Romance',
      publishedYear: 1813,
      price: 16.83,
    });
    const book3 = await Book.create({
      name: 'The Diary of Anne Frank',
      author: 'Anne Frank ',
      genre: 'Autobiography',
      publishedYear: 1947,
      price: 19.59,
    });
    const book4 = await Book.create({
      name: '1984',
      author: 'George Orwell ',
      genre: 'Political Fiction',
      publishedYear: 1949,
      price: 10.99,
    });
    const book5 = await Book.create({
      name: "Harry Potter and the Sorcerer's Stone",
      author: '  J.K. Rowling',
      genre: 'Fantasy',
      publishedYear: 1997,
      price: 13.49,
    });

    const book6 = await Book.create({
      name: 'The Lord of the Rings',
      author: ' J.R.R. Tolkien',
      genre: 'Fantasy',
      publishedYear: 1954,
      price: 15.99,
    });
    const book7 = await Book.create({
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald ',
      genre: 'Historical Fiction',
      publishedYear: 1925,
      price: 10.97,
    });
    const book8 = await Book.create({
      name: "Charlotte's Web",
      author: 'E.B. White',
      genre: 'Children',
      publishedYear: 1952,
      price: 5.47,
    });
    const book9 = await Book.create({
      name: 'The Hobbit',
      author: ' by J.R.R. Tolkien',
      genre: 'Fantasy',
      publishedYear: 1937,
      price: 22.5,
    });
    const book10 = await Book.create({
      name: 'Little Women',
      author: ' Louisa May Alcott  ',
      genre: 'Bildungsroman',
      publishedYear: 1868,
      price: 13.39,
    });
    const book11 = await Book.create({
      name: 'Fahrenheit 451',
      author: ' Ray Bradbury ',
      genre: ' Dystopian',
      publishedYear: 1953,
      price: 20.09,
    });
    const book12 = await Book.create({
      name: 'Jane Eyre',
      author: ' Charlotte Bronte ',
      genre: 'Gothic',
      publishedYear: 1947,
      price: 11.17,
    });
    const book13 = await Book.create({
      name: 'Animal Farm',
      author: '   George Orwell',
      genre: 'Political Fiction',
      publishedYear: 1945,
      price: 7.84,
    });
    const book14 = await Book.create({
      name: 'Gone with the Wind',
      author: '  Margaret Mitchell ',
      genre: 'Historical Fiction',
      publishedYear: 1936,
      price: 14.71,
    });
    const book15 = await Book.create({
      name: 'The Catcher in the Rye',
      author: '  J.D. Salinger',
      genre: 'Fiction',
      publishedYear: 1951,
      price: 15.99,
    });
    const book16 = await Book.create({
      name: 'The Book Thief',
      author: ' Markus Zusak ',
      genre: 'Bildungsroman',
      publishedYear: 2005,
      price: 14.49,
    });
    const book17 = await Book.create({
      name: 'The Adventures of Huckleberry Finn',
      author: ' Mark Twain ',
      genre: 'Picaresque',
      publishedYear: 1884,
      price: 5.33,
    });
    const book18 = await Book.create({
      name: 'The Hunger Games',
      author: ' Suzanne Collins ',
      genre: 'Adventure',
      publishedYear: 2008,
      price: 23.99,
    });
    const book19 = await Book.create({
      name: 'The Help',
      author: ' Kathryn Stockett  ',
      genre: 'Historical Fiction',
      publishedYear: 2009,
      price: 12.32,
    });
    const book20 = await Book.create({
      name: 'The Lion, the Witch, and the Wadrobe',
      author: ' C.S. Lewis  ',
      genre: 'Fantasy',
      publishedYear: 1950,
      price: 15.1,
    });
  } catch (err) {
    console.log('🔥 An error occured!!');
    console.error(err);
  }
};
module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
}

module.exports = seed;
