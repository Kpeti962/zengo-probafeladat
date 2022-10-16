import React from "react";
import CityInput from "./Chooser/CityInput";
import CountiesSelect from "./Chooser/CountiesSelect";
import upperTriangles from "../img/upper-triangles.png";
import lowerTriangles from "../img/lower-triangles.png";

const Chooser = ({
  choosenCountyId,
  setChoosenCountyId,
  newCityValue,
  cities,
  setNewCityValue,
  counties,
  setCounties,
  setChoosenCounty,
  newDataInput,
  setNewDataInput,
  setCities,
}) => {
  return (
    <div>
      <div className="chooser-section">
        <img src={upperTriangles} alt="" />
        <div className="select-input-wrapper">
          <CountiesSelect
            setChoosenCountyId={setChoosenCountyId}
            setCities={setCities}
            counties={counties}
            setCounties={setCounties}
            setNewDataInput={setNewDataInput}
            setChoosenCounty={setChoosenCounty}
          />
          {newDataInput && (
            <CityInput
              choosenCountyId={choosenCountyId}
              newCityValue={newCityValue}
              setCities={setCities}
              cities={cities}
              setNewCityValue={setNewCityValue}
              counties={counties}
            />
          )}
        </div>
        <img src={lowerTriangles} alt="" />
      </div>
    </div>
  );
};

export default Chooser;
