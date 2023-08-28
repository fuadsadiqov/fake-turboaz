const Item = require("../models/model");

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.status(200).json({ items });
};
exports.postItem = async (req, res) => {
  const { category } = req.body;
  const { attributes } = req.body;
  const { year } = req.body;
  const { maker } = req.body;
  const { model } = req.body;
  const { color } = req.body;
  const { power } = req.body;
  const { petroleum } = req.body;
  const { mileage } = req.body;
  const { gear } = req.body;
  const { newCar } = req.body;
  const { price } = req.body;
  const { additional } = req.body;
  const { seller } = req.body;
  const { engineVolume } = req.body;
  const { transmission } = req.body;
  const  imagePath  = "http://localhost:5038/uploads/" + req.file.filename;

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
