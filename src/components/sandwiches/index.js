import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Selections/style.css'

function Sandwiches() {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    axios
      .get("https://coffeeproducts.herokuapp.com/api/products/sandwiches")
      .then((res) => {
        console.log(res);
        setProds(res.data);
      })
      .catch();
  });

  return (
    <div>
            <ul className="list-group">
                {prods.map((prod) => (
                <li key={prod._id}>{prod.product} ${prod.price}<br></br>
                <img src={prod.image} alt={prod.product} /><br></br>
                <span>{prod.description}</span><br></br>
                <div>
                    <button className="add">Add</button>
                </div>
                </li>
                ))}
            </ul>
      </div>
  );
}

export default Sandwiches;
