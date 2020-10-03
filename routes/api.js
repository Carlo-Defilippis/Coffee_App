const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const db = require("./models/products");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://maurya512:enph739ektA@cluster0.vufo2.mongodb.net/coffeeshopusers?retryWrites=true&w=majority", { 
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
