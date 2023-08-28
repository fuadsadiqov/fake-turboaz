const Express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const itemRoutes = require('./routes/items');
const path = require('path');
const bodyParser = require('body-parser');

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

app.use(bodyParser.json());
app.use('/uploads', Express.static(path.join('uploads')));
app.use('/api/cars/addCar', itemRoutes);


app.delete('/api/cars/deleteCar', (request, response) => {
    database.collection("cars").deleteOne({
        id: request.query.id
    });
    response.json("Delete Successfully")
})