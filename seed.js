const {db, Plot, Gardener, Vegetable} = require('./model');

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!');
    // db.close() // only if using a version of node without `finally`
  })
  .then(() => {
    const bulkcreate1 = Vegetable.bulkCreate([
      {
        name: 'carrot',
        color: 'orange',
        planted_on: new Date()
      },
      {
        name: 'cucumber',
        color: 'green',
        planted_on: new Date()
      }
    ])
    return bulkcreate1
  })
  .then((a) => {
    console.log("------HERE--------", a)
    const gardeners = Gardener.bulkCreate([
      {name: 'Jon', age: 30},
      {name: 'Mustafa', age: 27}
    ])
    return [a, gardeners]
  })
  .then((array) => {
    array[1][0].addVegetable(array[0][0])
  })
  .then(() => {
    Plot.bulkCreate([
      {size: 100, shaded: true, gardenerId: 1},
      {size: 200, shaded: false, gardenerId: 2}
    ])
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ');
    console.log(err);
    //db.close() // only if using a version of node without `finally`
  })
  .finally(() => {
    // only if using a version of node WITH `finally`
    //db.close();
  });
