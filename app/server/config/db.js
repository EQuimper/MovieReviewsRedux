const mongoose = require('mongoose');
const fakeData = require('./fakeData');

const db = mongoose.connect('mongodb://localhost/myiso', (err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  fakeData();
});

module.exports = db;
