import React, { useState, useEffect } from "react";
import axios from "axios";
import MyComponents from '../../utils/locationapi/googlemaps'

function Google() {

  return (
    <div className="google">
        <MyComponents/>
    </div>
  );
}

export default Google;