//import logo from "../images/logo.svg";
import "../styles/App.scss";
import logo from "../images/3107397.jpeg";
import { useState, useEffect } from "react";
import getDataApi from "../services/api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("Gryffindor");
  useEffect(() => {
    getDataApi().then((data) => {
      setDataCharacters(data);
    });
  }, []);
  const filteredCharacters = dataCharacters.filter((item) => {
    return item.name.toLowerCase().includes(searchName.toLocaleLowerCase());
  });

  //Funciones de eventos
  const handleImputName = () => {
    setSearchName();
  };
  const handleHouseSelect = () => {
    setSearchHouse();
  };
  //obtener el id del usuario clicleado

  const { pathname } = useLocation();
  const dataPath = matchPath("/character/:characterId", pathname);
  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataCharacters.find(
    (character) => character.id === parseInt(characterId)
  );

  return (
    <div className="App">
      <header>
        <img className="img" src={logo} alt="img" />
      </header>{" "}
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilterByName
                  searchName={searchName}
                  handleImputName={handleImputName}
                />
                <FilterByHouse />{" "}
                <CharacterList
                  className="list"
                  filteredCharacters={filteredCharacters}
                />
              </>
            }
          />

          <Route
            path="/character/:characterId"
            element={<CharacterDetail characterFound={characterFound} />}
          />
        </Routes>
      </main>
    </div>
  );
}
export default App;
