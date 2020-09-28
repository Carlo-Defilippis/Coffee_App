import axios from "axios";

export default {
    getAPI: function() {
        return axios.get("https://coffeeproducts.herokuapp.com/api/products");
    },
    
}