const mongoose = require("mongoose");
const Schema = mongoose.Schema;

    const order = new Schema ({
        product: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    });

const Order = mongoose.model("Coffeeshop", order);

module.exports = Order;