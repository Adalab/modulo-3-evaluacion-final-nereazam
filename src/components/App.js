//import logo from "../images/logo.svg";
import "../styles/App.scss";
import { useState, useEffect } from "react";
import getDataApi from "../services/api";

function App() {
  const [dataUser, setDataUser] = useState([]);
  // const [filter, setFilter] = useState("");

  useEffect(() => {
    getDataApi().then((data) => {
      //console.log(data);
      setDataUser(data);
    });
  }, []);

  return (
    <div className="App">
      <h2>Tittle</h2>
    </div>
  );
}
export default App;
