const Express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");
const upload = multer({dest: 'uploads/'});

let app = Express();
app.use(cors());
app.use(Express.json());

let CONNECTION_STRING = "mongodb+srv://fuadsadiqov:hwQsixC9vyZP8CUp@cluster0.mrq5w9u.mongodb.net/?retryWrites=true&w=majority"

let DATABASENAME = "turbo-az";
let database;

app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        database = client.db(DATABASENAME)
        console.log("Mongo DB Connection Successfull");
    });
})

app.get('/api/cars/getCars', (request, response) => {
    database.collection("cars").find({}).toArray((error, result) => {
        response.send(result);
    });
})

app.post('/api/cars/addCar', upload.single('image'), (request, response) => {
    database.collection('cars').count({}, function(error, numOfDocs) {      
      const carData = {
        id: (numOfDocs+1).toString(),
        category: request.body.category,
        attributes: request.body.attributes,
        year: request.body.year,
        maker: request.body.maker,
        model: request.body.model,
        color: request.body.color,
        power: request.body.power,
        petroleum: request.body.petroleum,
        mileage: request.body.mileage,
        gear: request.body.gear,
        newCar: request.body.newCar,
        price: request.body.price,
        additional: request.body.additional,
        seller: request.body.seller,
        engineVolume: request.body.engineVolume,
        transmission: request.body.transmission,
      }
      database.collection('cars').insertOne(carData, function(error, result) {
        if (error) {
          console.error('Error inserting car:', error);
          return response.status(500).json({ error: 'Internal Server Error' });
        }
        response.status(201).json(`Cars added to database successfully`);
      });
    });
});

app.delete('/api/cars/deleteCar', (request, response) => {
    database.collection("cars").deleteOne({
        id: request.query.id
    });
    response.json("Delete Successfully")
})