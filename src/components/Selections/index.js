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

    <div className="row justify-content-center">
      <div className='col col-md-4 mt-5'>
        <div className="card-deck">
          <div className="card">
            {/* <div className="title"></div> */}
            <h3 className="title">Fall Selections</h3>
            <Promo />
          </div>
          <div className="card">
            <h3 className="title">Coffee</h3>
            <Coffee />
          </div>
          <div className="card">
            <h3 className="title">Tea</h3>
            <Tea />
          </div>
        </div>
      </div>
      <div className='col col-md-4 mt-5'>
        <div className="card-deck">
          <div className="card">
            <h3 className="title">Breakfast</h3>
            <Breakfast />
          </div>
          <div className="card">
            <h3 className="title">Bagel</h3>
            <Bagel />
          </div>
          <div className="card">
            <h3 className="title">Sandwiches</h3>
            <Sandwiches />
          </div>
          </div>
          </div>
          <div className='col col-md-4 mt-5'>
            <div className="card-deck">
              <div className="card">
                <h3 className="title">Sides</h3>
                <Sides />
              </div>
              <div className="card">
            <h3 className="title">Pastries</h3>
            <Pastries />
          </div>
            </div>
          </div>
        </div>
  );
}

export default Selection;
