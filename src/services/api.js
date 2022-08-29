const getDataApi = () => {
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((each, id) => {
        return {
          id: id,
          name: each.name,
          alternate_names: each.alternate_names,
          species: each.species,
          gender: each.gender,
          house: each.house,
          alive: each.alive,
          image:
            each.image ||
            "https://ae01.alicdn.com/kf/HTB1SomBJFXXXXauXFXXq6xXFXXXx/Harry-Potter-felicidad-puede-ser-encontrado-incluso-in-the-darkst-fo-veces-Albus-Dumbledore-pared.jpg",
        };
      });
      return dataClean;
    });
};

export default getDataApi;
