const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  id: String,
  category: String,
  attributes: String,
  year: String,
  maker: String,
  model: String,
  color: String,
  power: String,
  petroleum: String,
  mileage: String,
  gear: String,
  newCar: String,
  price: String,
  additional: String,
  seller: String,
  engineVolume: String,
  transmission: String,
  imagePath: String,
});

module.exports = mongoose.model('Item', ItemSchema);