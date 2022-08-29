//import logo from "../images/logo.svg";
import "../styles/App.scss";
import "../styles/_reset.scss";
import logo from "../images/3107397.jpeg";
import { useState, useEffect } from "react";
import getDataApi from "../services/api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import Filters from "./Filters";
import ls from "../services/localStorage";
function App() {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterName, setFilterName] = useState(ls.get("inputName", ""));
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [filterByGender, setFilterByGender] = useState("all");
  // const [warnings, setWarnings] = useState("");

  //Funcion del servidor
  useEffect(() => {
    getDataApi().then((data) => {
      setDataCharacters(data);
    });
  }, []);
  // LOCAL-STORAGE
  useEffect(() => {
    ls.set("inputName", filterName);
    // ls.set('selectHouse', filterHouse);
  }, [filterName]);

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
  /* const advice = () => {
    if (filterName.length === 0) {
      setWarnings("¡Introduce un título!");
    } else if (filterName !== dataCharacters.name) {
      setWarnings("¡Título no encontrado!");
    }
  };*/

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

  const NotFoundElem = () => {
    return <h1>El elemento buscado no existe!</h1>;
  };
  //obtener el id del usuario clicleado para ruta dinamica
  const GetRouteCard = () => {
    const { pathname } = useLocation();
    const dataPath = matchPath("/character/:characterId", pathname);
    const characterId = dataPath !== null ? dataPath.params.characterId : null;
    const characterFound = dataCharacters.find(
      (character) => character.id === parseInt(characterId)
    );
    if (characterFound) {
      return characterFound;
    } else {
      return NotFoundElem();
    }
  };

  //Funcion para Resetear Inputs
  const resetFilters = () => {
    setFilterName("");
    setFilterHouse("");
    setFilterByGender("all");
  };

  return (
    <div className="App">
      <header>
        <img className="img" src={logo} alt="img" />
      </header>{" "}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                resetFilters={resetFilters}
                filterName={filterName}
                filterHouse={filterHouse}
                filterByGender={filterByGender}
                handleFilterName={handleFilterName}
                handleSelectHouse={handleSelectHouse}
                handleFilterByGender={handleFilterByGender}
              />
              <main>
                <p></p>
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
