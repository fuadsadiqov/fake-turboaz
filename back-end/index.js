const Express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");

let app = Express();
app.use(cors());

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

// app.post('/api/cars/addCar', multer().none(), (request, response) => {
//     database.collection('cars').count({}, function(error, numOfDocs) {
//         database.collection("cars").insertOne({
//             id: (numOfDocs+1).toString(),
//             category: request.body.newNotes.category
//         });
//         response.json("Added Successsfully")
//     });
// })
app.post('/api/cars/addCar', (request, response) => {
    database.collection('cars').countDocuments({}, function(error, numOfDocs) {
      if (error) {
        console.error('Error counting documents:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
      }

      const newCar = request.body; // Assuming the request body contains the car data
      newCar.id = (numOfDocs + 1).toString(); // Assign the ID
      
      database.collection('cars').insertOne(newCar, function(error, result) {
        if (error) {
          console.error('Error inserting car:', error);
          return response.status(500).json({ error: 'Internal Server Error' });
        }
        response.status(201).json({ message: 'Car added successfully', car: newCar });
      });
    });
});

app.delete('/api/cars/deleteCar', (request, response) => {
    database.collection("cars").deleteOne({
        id: request.query.id
    });
    response.json("Delete Successfully")
})