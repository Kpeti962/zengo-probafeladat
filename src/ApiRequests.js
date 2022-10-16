import axios from "axios";

axios.defaults.baseURL = "http://probafeladat-api.zengo.eu";
axios.defaults.headers.common["token"] = "efa18b92c2d9ea3bc8298b5f5d2432ce";

export const getCounties = async () => {
  try {
    const response = await axios.get("/api/all_states");

    return response.data.data;
  } catch (err) {
    return console.log(err);
  }
};
export const getTheCities = async (countyId) => {
  try {
    const response = await axios.post("/api/state_city", {
      state_id: countyId,
    });
    return response.data.data;
  } catch (err) {
    return console.log(err);
  }
};

export const putNewCity = async (newCityName, countyId) => {
  return axios.put("/api/city", {
    name: newCityName,
    state_id: countyId,
  });
};

export const deleteCity = async (cityId) => {
  return axios.delete("/api/city", { data: { city_id: cityId } });
};

export const editCity = async (editedCityName, cityId) => {
  return axios.patch("/api/city", { name: editedCityName, city_id: cityId });
};
