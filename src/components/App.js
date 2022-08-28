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
  const [warnings, setWarnings] = useState("warnings");

  //Funcion del servidor
  useEffect(() => {
    getDataApi().then((data) => {
      setDataCharacters(data);
    });
  }, []);
  //funcion de filtrado por nombre
  const filteredCharacters = dataCharacters
    .filter((item) => {
      return item.name.toLowerCase().includes(filterName.toLocaleLowerCase());
    })
    .filter((item) => {
      return item.house === filterHouse;
    })
    .filter((item) => {
      return filterByGender === "all" ? true : item.gender === filterByGender;
    });

  //Funcion manejadora del Input name
  const handleInputName = (inputName) => {
    setFilterName(inputName);
  };
  //Funcion manejadora del Select house
  const handleSelectHouse = (inputHouse) => {
    setFilterHouse(inputHouse);
    //filtro por genero
    const handleFilterByGender = (value) => {
      setFilterByGender(value);
    };
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
  };
  //Funcion de aviso
  const setAdvise = () => {
    if (filterName === "") {
      setWarnings(<p>Intoduce un nombre!</p>);
    } else if (filterName !== filteredCharacters) {
      setWarnings(<p>Introduce un nombre valido! </p>);
    }
  };

  return (
    <div className="App">
      <header>
        <img className="img" src={logo} alt="img" />
        <p>{warnings}</p>
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
                handleInputName={handleInputName}
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
