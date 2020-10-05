import React, { useState, useEffect } from "react";
import axios from "axios";
import { Checkout } from '../CheckOut';
import { Link } from 'react-router-dom';
import '../Selections/style.css'

function Coffee() {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    axios
      .get("https://coffeeproducts.herokuapp.com/api/products/coffee")
      .then((res) => {
        console.log(res);
        setProds(res.data);
      })
      .catch();
  });

  return (
    <div>
        <div className='container'>
            <ul className="list-group">
                {prods.map((prod) => (
                <li className='text'key={prod._id}>{prod.product} ${prod.price}<br></br>
                <img src={prod.image} alt={prod.product} /><br></br>
                <span className='text'>{prod.description}</span><br></br>
                <div>
                    <button className="add btn-info">Add</button>
                </div>
                </li>
                ))}
            </ul>
      </div>
    </div>
  );
}

export default Coffee;
