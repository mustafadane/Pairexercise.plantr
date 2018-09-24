const db = require('./model');

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!');
    // db.close() // only if using a version of node without `finally`
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ');
    console.log(err);
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => {
    // only if using a version of node WITH `finally`
    db.close();
  });
