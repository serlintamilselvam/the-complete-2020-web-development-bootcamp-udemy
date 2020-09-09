const mongoose = require('mongoose')

const dbUrl ="mongodb://127.0.0.1:27017/fruitsDB";

const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbUrl, mongodbOptions) //Creates a new DB if fruitsDB doesn't exist

// CREATE COLLECTION SCHEMA
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
})

// fruit.save()

mongoose.connection.close()