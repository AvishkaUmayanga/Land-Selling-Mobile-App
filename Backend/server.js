const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const port = process.env.port || 8050;

//Used cors dependency
app.use(cors());
//used body parser dependency
app.use(bodyParser.json()); 

const url = process.env.MONGODB_URL;

//These options help ensure a more reliable, efficient, and up-to-date connection to the MongoDB database using Mongoose.
mongoose.connect(url, {
  useCreateIndex: true, //Ensures that Mongoose will use the more modern and efficient method for index creation
  useNewUrlParser: true, //This option instructs Mongoose to use the new URL parser when connecting to the MongoDB server
  useUnifiedTopology: true, //This option enables the use of the new MongoDB driver's unified topology engine
  useFindAndModify: false, //offer better performance and functionality
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection success!");
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});


const studentRoutes = require("./routes/userRoutes");
const productsRoutes = require("./routes/productRouts");

app.use("/user", studentRoutes);
app.use("/product", productsRoutes);
