import React, { useEffect, useState } from "react";
import CityList from "./components/CityList";
import Nav from "./components/Nav";
import Chooser from "./components/Chooser";
import "./styles/App.scss";
import axios from "axios";
import starterImg from "./img/starter-img.png";
import { getTheCounty } from "./ApiRequests";

function App() {

  //Collect the API
  const [counties, setCounties] = useState([]);
  const [cities, setCities] = useState([])

  const [newCity, setNewCity] = useState("")

  //Get the choosen county from the option input
  const [choosenCounty, setChoosenCounty] = useState("");
  //For make the city input and the list visible
  const [newDataInput, setNewDataInput] = useState(false);

  //Get the counties from the API to the county useState hook
  useEffect( ()  => {
    const fetchCounties = async () => {
      const countiesArray = await getTheCounty();
      return setCounties(countiesArray)
    }
    setCounties(fetchCounties())
    
  }, []);




  return (
    <div className="App">
      <Nav />
      <div className="main-section">
     {counties.length > 0 && <>
     <Chooser
     newCity={newCity}
     setNewCity={setNewCity}
     cities={cities}
        setCities={setCities}
        newDataInput={newDataInput}
        setNewDataInput={setNewDataInput}
        counties={counties}
        setCounties={setCounties}
        setChoosenCounty={setChoosenCounty}
        />
        <CityList cities={cities} newDataInput={newDataInput} choosenCounty={choosenCounty} />
        </>
        }
      </div>
    </div>
  );
}

export default App;
