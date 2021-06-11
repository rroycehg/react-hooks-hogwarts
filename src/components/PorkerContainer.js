import React from "react";
import PorkerTile from "./PorkerTile";

function PorkerContainer(hogs) {
    console.log(hogs)
    return(
        <div>
        <h1>Hog List</h1>
            {
            hogs.hogs.map(hog=> (
                <PorkerTile 
                name = {hog.name}
                image = {hog.image}
                weight = {hog.weight}
                specialty= {hog.specialty}
                greased= {hog.greased}
                medal= {hog["highest medal achieved"]}
                 />
                ))
            }
        </div>)
}

export default PorkerContainer