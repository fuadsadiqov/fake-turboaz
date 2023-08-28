const Item = require("../models/model");

exports.getItems = async (req, res) => {
  const profiles = await Item.find();
  res.status(200).json({ profiles });
};
exports.postItem = async (req, res) => {
  const { category } = req.body.category;
  const { attributes } = req.body.attributes;
  const { year } = req.body.year;
  const { maker } = req.body.maker;
  const { model } = req.body.model;
  const { color } = req.body.color;
  const { power } = req.body.power;
  const { petroleum } = req.body.petroleum;
  const { mileage } = req.body.mileage;
  const { gear } = req.body.gear;
  const { newCar } = req.body.newCar;
  const { price } = req.body.price;
  const { additional } = req.body.additional;
  const { seller } = req.body.seller;
  const { engineVolume } = req.body.engineVolume;
  const { transmission } = req.body.transmission;
  const { imagePath } = "http://localhost:5038/uploads/" + req.file.filename;

  const item = new Item({
    category,
    attributes,
    year,
    maker,
    model,
    color,
    power,
    petroleum,
    mileage,
    gear,
    newCar,
    price,
    additional,
    seller,
    engineVolume,
    transmission,
    imagePath,
  });
  const createdItem = await item.save();
  res.status(201).json({
    item: {
      ...createdItem._doc,
    },
  });
};
