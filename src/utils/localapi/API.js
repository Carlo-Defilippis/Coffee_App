import axios from "axios";

export default {
    getProducts: function() {
        return axios.get("https://coffeeproducts.herokuapp.com/api/products");
    },
    getBagel: function() {
        return axios.get("https://coffeeproducts.herokuapp.com/api/products/bagel");
    },
    getBreakfast: function() {
        return axios.get("https://coffeeproducts.herokuapp.com/api/products/breakfast");
    },
    getCoffee: function() {
        return axios.get("https://coffeeproducts.herokuapp.com/api/products/coffee");
    },
    getPastry: function() {
        return axios.get("https://coffeeproducts.herokuapp.com/api/products/pastry");
    },
    // getPromo: function() {
    //     return axios.get("https://coffeeproducts.herokuapp.com/api/products/promo");
    // },
    getPromo: function() {
        return axios.get("https://coffeeproducts.herokuapp.com/api/products/promo");
    },
    getSandwiches: function() {
        return axios.get("https://coffeeproducts.herokuapp.com/api/products/sandwiches");
    },
    getSides: function() {
        return axios.get("https://coffeeproducts.herokuapp.com/api/products/sides");
    },
    getTea: function() {
        return axios.get("https://coffeeproducts.herokuapp.com/api/products");
    }
}