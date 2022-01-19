const express = require('express');
const morgan = require('morgan');
const app = express();

if (process.env.NODE_ENV !== 'testing') app.use(morgan('dev'));

app.use(express.json());

app.use('/api/', require('./routes/books'));
// app.use('/api/', (req, res) => {
//   res.status(404).send({ message: 'Not Found' });
// });



app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
});

module.exports = app;
