import React from "react";
import arrow from "../../img/county-arrow.png";
import { getTheCities } from "../../ApiRequests";

const CountiesSelect = ({
  setChoosenCountyId,
  counties,
  setCounties,
  setChoosenCounty,
  setNewDataInput,
  setCities,
}) => {
  const choosenCountyHandler = async (e) => {
    setChoosenCounty(counties[Number(e.target.value) / 2 - 1].name);
    setChoosenCountyId(counties[Number(e.target.value) / 2 - 1].id);
    setNewDataInput(true);
    let responseCities = await getTheCities(e.target.value);
    setCities(responseCities);
  };

  

  return (
    <div className="counties-section">
      <h5>MEGYE</h5>
      <select onChange={choosenCountyHandler} className="county-picker">
        <option>Válassz megyét</option>
        {counties.length > 0 &&
          counties.map((county) => {
            const { id } = county;

            return (
              <option key={id} value={county.id}>
                {county?.name}
              </option>
            );
          })}
      </select>

      <img src={arrow} alt="" />
    </div>
  );
};

export default CountiesSelect;
