import React, { Component } from "react";
import API from "../utils/localapi/API";
import Selections from "../components/Selections";

class Products extends Component {

    state = {
        product: "",
        bagel: "",
        breakfast: "", 
        coffee: "",
        pastry: "",
        promo: "",
        sandwiches: "",
        sides: "",
        tea: ""
    }

componentDidMount() {
    this.loadBagel();
    this.loadBreakfast();
    this.loadCoffee();
    this.loadPastry();
    this.loadPromo();
    this.loadSandwich();
    this.loadSides();
};

loadBagel = () => {
    API.getBagel()
    .then(res =>
        this.setState({
            bagel: res.data.bagel
        }))
        .then(console.log(bagel))
        .catch(err => console.log(err))
};

loadBreakfast = () => {
    API.getBreakfast()
    .then(res =>
        this.setState({
            breakfast: res.data.breakfast
        }))
        .then(console.log(breakfast))
        .catch(err => console.log(err))
};

loadCoffee = () => {
    API.getCoffee()
    .then(res =>
        this.setState({
            coffee: res.data.coffee
        }))
        .then(console.log(coffee))
        .catch(err => console.log(err))
};

loadPastry = () => {
    API.getPastry()
    .then(res =>
        this.setState({
            pastry: res.data.pastry
        }))
        .then(console.log(pastry))
        .catch(err => console.log(err))
};

loadPromo = () => {
    API.getPromo()
    .then(res =>
        this.setState({
            promo: res.data.promo
        }))
        .then(console.log(promo))
        .catch(err => console.log(err))
};

loadSandwiches = () => {
    API.getSandwiches()
    .then(res =>
        this.setState({
            sandwiches: res.data.sandwiches
        }))
        .then(console.log(sandwiches))
        .catch(err => console.log(err))
};

loadSides = () => {
    API.getSides()
    .then(res =>
        this.setState({
            sies: res.data.sies
        }))
        .then(console.log(sies))
        .catch(err => console.log(err))
};

loadTea = () => {
    API.getTea()
    .then(res =>
        this.setState({
            tea: res.data.tea
        }))
        .then(console.log(tea))
        .catch(err => console.log(err))
};

render() {
    return (
        <div>
            <h1>Selections Page</h1>
            <h3>Fall Favorites</h3>
            <ul className="promo"></ul>

            <h3>Coffee</h3>
            <ul className="coffee"></ul>

            <h3>Tea</h3>
            <ul className="tea"></ul>

            <h3>Pastries</h3>
            <ul className="pastry"></ul>

            <h3>Sandwiches</h3>
            <ul className="sandwiches"></ul>
            
            <h3>Breakfast</h3>
            <ul className="breakfast"></ul>

            <h3>Sides</h3>
            <ul className="sides"></ul>
        </div>
    )
}

}
// Continue here with API's for products