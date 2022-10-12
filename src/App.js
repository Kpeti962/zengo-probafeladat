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
      token: "6224922a57237ec294f5ef05a8a87b48",
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
     {newDataInput ? (<CityList choosenCounty={choosenCounty} />) :
     (<img className="starter-img" src={starterImg} alt="" />)
     }
     </div> 
    </div>
  );
}

export default App;
