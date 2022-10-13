import axios from "axios";

axios.defaults.baseURL = "http://probafeladat-api.zengo.eu";
axios.defaults.headers.common["token"] = "efa18b92c2d9ea3bc8298b5f5d2432ce";


export const getTheCounty = async () => {
  try {
    const response = await axios.get(
      `${axios.defaults.baseURL}/api/all_states`,
    );
    
    return response.data.data;
  } catch (err) {
    return console.log(err);
  }
};
export const getTheCity = async (countyId) => {
  try {
    const response = await axios.post(
      `${axios.defaults.baseURL}/api/state_city`,
      { state_id: countyId }
    );
    return response.data.data;
  } catch (err) {
    return console.log(err);
  }
};

//Ennél a requestnél nem kap id-t. A függvényt a Cities.js-ben hívtam meg
 export const putNewCity = async ( newCityName, countyId ) => {
  try {
    const response = await axios.put(
      `${axios.defaults.baseURL}/api/city`,
      {name: newCityName,
      state_id: countyId },
    );
   
    return response.data;
  } catch (err) {
    return console.log(err);
  }
}; 
