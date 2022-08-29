//import logo from "../images/logo.svg";
import "../styles/Components/App.scss";
import "../styles/core/_reset.scss";
import "../styles/core/_variables.scss";
import logo from "../images/3107397.jpeg";

import { useState, useEffect } from "react";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import getDataApi from "../services/api";
import ls from "../services/localStorage";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import Loading from "./Loading";

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterName, setFilterName] = useState(ls.get("inputName", ""));
  const [filterHouse, setFilterHouse] = useState(
    ls.get("selectHouse", "Gryffindor")
  );
  const [filterByGender, setFilterByGender] = useState("all");
  const [loading, setLoading] = useState(false);

  //Funcion del servidor
  useEffect(() => {
    setLoading(true);
    getDataApi()
      .then((data) => {
        setLoading(false);
        setDataCharacters(data);
      })
      .catch((error) => console.log(`Ha sucedido un error: ${error}`));
  }, []);
  // LOCAL-STORAGE
  useEffect(() => {
    ls.set("inputName", filterName);
    ls.set("selectHouse", filterHouse);
  }, [filterName, filterHouse]);

  //funcion de filtrado del array principal
  const filteredCharacters = dataCharacters

    .filter((item) => {
      return item.name.toLowerCase().includes(filterName.toLocaleLowerCase());
    })
    .filter((item) => {
      return item.house === filterHouse;
    })
    .filter((item) => {
      return filterByGender === "all" ? true : filterByGender === item.gender;
    });

  //Funcion para avisa de campo mal introducido
  const advice = () => {
    if (filterName.length === 0) {
      return "¡Introduce un título!";
    } else if (filteredCharacters.length === 0) {
      return "¡Título no encontrado!";
    }
  };

  //Funcion manejadora del Input name
  const handleFilterName = (inputName) => {
    setFilterName(inputName);
  };
  //Funcion manejadora del Select house
  const handleSelectHouse = (inputHouse) => {
    setFilterHouse(inputHouse);
  };
  //filtro por genero
  const handleFilterByGender = (inputGender) => {
    setFilterByGender(inputGender);
  };

  //obtener el id del usuario clicleado para ruta dinamica
  const GetRouteCard = () => {
    const { pathname } = useLocation();
    const dataPath = matchPath("/character/:characterId", pathname);
    const characterId = dataPath !== null ? dataPath.params.characterId : null;
    const characterFound = dataCharacters.find(
      (character) => character.id === parseInt(characterId)
    );

    return characterFound;
  };

  //Funcion para Resetear Inputs
  const resetFilters = () => {
    setFilterName("");
    setFilterHouse("Gryffindor");
    setFilterByGender("all");
  };

  return (
    <div className="App">
      <header>
        <img className="img" src={logo} alt="img" />
      </header>{" "}
      <Loading loading={loading} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <form>
                  <fieldset>
                    <p className="ad">{advice()}</p>
                    <Filters
                      resetFilters={resetFilters}
                      filterName={filterName}
                      filterHouse={filterHouse}
                      filterByGender={filterByGender}
                      handleFilterName={handleFilterName}
                      handleSelectHouse={handleSelectHouse}
                      handleFilterByGender={handleFilterByGender}
                    />
                  </fieldset>
                </form>
                <CharacterList
                  className="list"
                  filteredCharacters={filteredCharacters}
                  characterFound={GetRouteCard()}
                />
              </main>
            </>
          }
        />

        <Route
          path="/character/:characterId"
          element={<CharacterDetail characterFound={GetRouteCard()} />}
        />
      </Routes>
    </div>
  );
}
export default App;
