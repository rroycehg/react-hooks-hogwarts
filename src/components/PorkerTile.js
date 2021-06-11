import React from "react";
import {useState} from 'react'
import FullDetails from './FullDetails'
import HogInitial from "./HogInitial";


// When the app first loads, display a tile for each hog in the porker_data.js file. In the tile, display the name and image for each hog.

// When the user clicks on the hog tile, display the other details about the hog (its specialty, weight, greased, and highest medal achieved)

// Allow the user to filter the hogs that are greased

// Allow the user to sort the hogs based on name or weight


function PorkerTile(props) {
    // set state
    const [hogDetails, hogDetailsSetter] = useState(false)



    function detailHandler(e) {
        hogDetailsSetter(!hogDetails)
    }
  
  return(
    <div class="pigTile" onClick={e => detailHandler(e)}>
        <img src={props.image}/>
        <h2>{props.name}</h2>
        {hogDetails ? <FullDetails specialty={props.specialty} weight={props.weight} greased={props.greased} medal = {props.medal}/> : null}
    </div>
    )


}
export default PorkerTile;