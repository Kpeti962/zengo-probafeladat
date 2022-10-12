export const getTheCity = (a, setB ) => {
    axios
      .post(
        "http://probafeladat-api.zengo.eu/api/state_city",
        { state_id: a },
        {
          headers: {
            "token": "efa18b92c2d9ea3bc8298b5f5d2432ce",
          },
        }
      )
      .then((response) => {
        setB(response.data)
      })
      .catch((err) => console.log(err));
  };