const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models/products");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Coffeeshop", { useNewUrlParser: true });

app.post("/submit", ({ body }, res) => {
  db.create(body)
    .then(dbUser => {
        res.redirect('/')
    })
    
    .catch(err => {
      res.json(err);
    });
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
  })

app.get('/api/products', function (req, res) {
    db.find({})
    .sort({category: 1})
    .then(cb => {
        res.json(cb);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
