import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PorkerContainer from "./PorkerContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <PorkerContainer hogs = {hogs}/>
    </div>
  );
}

export default App;
