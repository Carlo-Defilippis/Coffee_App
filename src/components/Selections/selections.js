import React, { Component } from "react";

function Selections(props) {


    // Mapping
    <ul className="selections">

     {/* Mapping Coffee */}
    {props.coffee.map(result => (
        <li key={result} className="coffee">

        </li>
    ))}

    </ul>
}