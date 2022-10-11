import React from "react";
import CityList from "./components/CityList";
import Nav from "./components/Nav";
import Chooser from "./components/Chooser";
import "./components/styles/App.scss"


function App() {
  return (
    <div className="App">
      <Nav />
     <div className="main-section">
     <Chooser />
     <CityList />
     </div> 
    </div>
  );
}

export default App;
