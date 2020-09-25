let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Coffeeshop", {
  useNewUrlParser: true,
  useFindAndModify: false
});


  let productSeed = [
    {
      product: "Espresso",
      price: 1.99,
      category: "Coffee"
    },
    {
      product: "Latte",
      price: 2.99,
      category: "Coffee"
    },
    {
      product: "Cortado",
      price: 3.99,
      category: "Coffee"
    }
  ];
  
db.Coffeeshop.deleteMany({})
  .then(() => db.Coffeeshop.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


