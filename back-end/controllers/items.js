const Item = require("../models/model");

exports.getItems = async (req, res) => {
  const profiles = await Item.find();
  res.status(200).json({ profiles });
};
exports.postItem = async (req, res) => {
  const { category } = request.body.category;
  const { attributes } = request.body.attributes;
  const { year } = request.body.year;
  const { maker } = request.body.maker;
  const { model } = request.body.model;
  const { color } = request.body.color;
  const { power } = request.body.power;
  const { petroleum } = request.body.petroleum;
  const { mileage } = request.body.mileage;
  const { gear } = request.body.gear;
  const { newCar } = request.body.newCar;
  const { price } = request.body.price;
  const { additional } = request.body.additional;
  const { seller } = request.body.seller;
  const { engineVolume } = request.body.engineVolume;
  const { transmission } = request.body.transmission;
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
