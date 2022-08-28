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

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [filterByGender, setFilterByGender] = useState("all");
  //const [warnings, setWarnings] = useState("warnings");

  //Funcion del servidor
  useEffect(() => {
    getDataApi().then((data) => {
      setDataCharacters(data);
    });
  }, []);
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
  /*const alert = () => {
    if (filterName.length === 0) {
      setWarnings("¡Introduce un título!");
    } else if (filterName !== dataCharacters.name) {
      setWarnings("¡Título no encontrado!");
    }*/

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

  const { pathname } = useLocation();
  const dataPath = matchPath("/character/:characterId", pathname);
  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataCharacters.find(
    (character) => character.id === parseInt(characterId)
  );

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
        <p>{alert()}</p>
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
                <CharacterList
                  className="list"
                  filteredCharacters={filteredCharacters}
                />
              </main>
            </>
          }
        />

        <Route
          path="/character/:characterId"
          element={<CharacterDetail characterFound={characterFound} />}
        />
      </Routes>
    </div>
  );
}
export default App;
