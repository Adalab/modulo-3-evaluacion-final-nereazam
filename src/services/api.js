const getDataApi = () => {
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((each) => {
        return {
          name: each.name,
          alternate_names: each.alternate_names,
          species: each.species,
          gender: each.gender,
          house: each.house,
          alive: each.alive,
          image:
            each.image ||
            "https://via.placeholder.com/210x295/ggggg/584555/?text=Undefined",
        };
      });
      return dataClean;
    });
};

export default getDataApi;
