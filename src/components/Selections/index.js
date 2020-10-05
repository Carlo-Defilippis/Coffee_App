import React from "react";
import Promo from "../Promo";
import Coffee from "../Coffee";
import Tea from "../tea";
import Sandwiches from "../sandwiches";
import Breakfast from "../breakfast";
import Pastries from "../pastries";
import Bagel from "../bagel";
import Sides from "../sides";

import "./style.css";

function Selection() {
  return (
    <div className="row">
      <div className="col-10 col-md-6 mx-auto mt-3">
        <div className="card">
          <div className="title"></div>
          <h3 className="title">Fall Selections</h3>
          <Promo />
          <h3>Coffee</h3>
          <Coffee />
          <h3>Tea</h3>
          <Tea />
          <h3>Sandwiches</h3>
          <Sandwiches />
          <h3>Breakfast</h3>
          <Breakfast />
          <h3>Pastries</h3>
          <Pastries />
          <h3>Bagel</h3>
          <Bagel />
          <h3>Sides</h3>
          <Sides />
        </div>
      </div>
    </div>
  );
}

export default Selection;
