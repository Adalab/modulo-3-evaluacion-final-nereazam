//import logo from "../images/logo.svg";
import "../styles/App.scss";
import { useState, useEffect } from "react";
import getDataApi from "../services/api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";

//import Filters from "./Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("Gryffindor");

  //obtener el id del usuario clicleado
  const { pathname } = useLocation();

  const dataPath = matchPath("/user/:userId", pathname);

  const userId = dataPath !== null ? dataPath.params.userId : null;
  const userFound = characters.find((user) => {
    return user.id === userId;
  });
  //Funciones de eventos
  const handleFilterName = (name) => {
    setSearchName(name);
  };

  const handleFilterHouse = (house) => {
    setSearchHouse(house);
  };

  useEffect(() => {
    getDataApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <img />
      </header>

      <Routes>
        <Route path="/" element={<CharacterList characters={characters} />} />

        <Route
          path="/character/:characterId"
          element={<CharacterDetail character={userFound} />}
        />
      </Routes>
    </div>
  );
}
export default App;
