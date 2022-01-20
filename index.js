const app = require('./server/app');
const port = process.env.PORT || 3000;
const db = require('./server/db');

if (process.env.SEED) {
  db.seed()
    .then(() => {
      console.log(` users seeded!`);
    })
    .catch((ex) => {
      throw Error(ex);
    });
}

app.listen(port, () => console.log(`listening on port ${port} at http://localhost:3000`));
