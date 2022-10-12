import React, { useEffect, useState } from "react";
import CityList from "./components/CityList";
import Nav from "./components/Nav";
import Chooser from "./components/Chooser";
import "./styles/App.scss"
import axios from "axios";
import starterImg from "./img/starter-img.png"


function App() {
//Collect the API
  const [counties, setCounties] = useState([]);

  //Get the choosen county from the option input
  const [choosenCounty, setChoosenCounty] = useState("");
  //For make the city input and the list visible
  const [newDataInput, setNewDataInput] = useState(false);


//Get the counties from the API to the county useState hook
useEffect(() => {
  axios
  .get("https://probafeladat-api.zengo.eu/api/all_states", {
    headers: {
      "token": "efa18b92c2d9ea3bc8298b5f5d2432ce",
    },
  })
  .then((response) => {
    setCounties(response.data.data);
  })
  .catch((err) => console.log(err));
}, []);



  return (
    <div className="App">
      <Nav />
     <div className="main-section">
     <Chooser newDataInput={newDataInput} setNewDataInput={setNewDataInput} counties={counties} setCounties={setCounties} setChoosenCounty={setChoosenCounty} />
     <CityList newDataInput={newDataInput} choosenCounty={choosenCounty} />
    
     
     </div> 
    </div>
  );
}

export default App;
