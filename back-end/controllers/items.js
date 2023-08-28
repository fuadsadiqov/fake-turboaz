const Item = require("../models/model");

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.status(200).json({ items });
};
exports.postItem = async (req, res) => {
  const { category, attributes, year, maker, model, color, power, petroleum, mileage, gear, newCar, price, additional, seller, engineVolume, transmission } = req.body;
  let imagePath = "";
  if (req.file && req.file.filename) {
      imagePath = "http://localhost:5038/uploads/" + req.file.filename;
  }
  const item = new Item({
    category, attributes, year, maker, model, color, power, petroleum, mileage, gear, newCar, price, additional, seller, engineVolume, transmission, imagePath,
  });
  const createdItem = await item.save();
  res.status(201).json({
    item: {
      ...createdItem._doc,
    },
  });
};
