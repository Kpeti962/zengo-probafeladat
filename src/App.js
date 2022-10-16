import React, { useEffect, useState } from "react";
import CityList from "./components/CityList";
import Nav from "./components/Nav";
import Chooser from "./components/Chooser";
import "./styles/App.scss";
import { getCounties } from "./ApiRequests";

function App() {
  const [counties, setCounties] = useState([]);
  const [cities, setCities] = useState([]);
  const [newCityValue, setNewCityValue] = useState("");
  const [choosenCounty, setChoosenCounty] = useState("");
  const [choosenCountyId, setChoosenCountyId] = useState();
  const [newDataInput, setNewDataInput] = useState(false);

  useEffect(() => {
    const fetchCounties = async () => {
      const countiesArray = await getCounties();
      setCounties(countiesArray);
    };
    fetchCounties();
  }, []);

  return (
    <div className="App">
      <Nav />
      <div className="main-section">
        {counties.length > 0 && (
          <>
            <Chooser
              choosenCountyId={choosenCountyId}
              setChoosenCountyId={setChoosenCountyId}
              newCityValue={newCityValue}
              setNewCityValue={setNewCityValue}
              cities={cities}
              setCities={setCities}
              newDataInput={newDataInput}
              setNewDataInput={setNewDataInput}
              counties={counties}
              setCounties={setCounties}
              setChoosenCounty={setChoosenCounty}
            />
            <CityList
              setCities={setCities}
              cities={cities}
              newDataInput={newDataInput}
              choosenCounty={choosenCounty}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
