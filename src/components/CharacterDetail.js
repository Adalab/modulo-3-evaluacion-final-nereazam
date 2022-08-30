import "../styles/Components/CharacterDetail.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CharacterDetail = (props) => {
  const NotFoundElem = () => {
    return <h1 className="NotFound">El elemento buscado no existe!</h1>;
  };
  const GetStatusIcon = () => {
    if (props.characterFound.alive === true) {
      return <i className="fa-solid fa-heart-pulse icon"></i>;
    } else {
      return <i className="fa-solid fa-skull icon"></i>;
    }
  };
  const GetStatus = () => {
    if (props.characterFound.alive === true) {
      return " Alive ";
    } else {
      return " Dead ";
    }
  };
  const GetGender = () => {
    if (props.characterFound.gender === "female") {
      return <i className="fa-solid fa-venus icon"></i>;
    } else {
      return <i className="fa-solid fa-mars icon"></i>;
    }
  };

  const altName = () => {
    return props.characterFound.alternate_names.length > 0 ? (
      <p>
        Nombre alternativo:
        {props.characterFound.alternate_names.map((name) => name + "/")}
      </p>
    ) : (
      []
    );
  };
  if (props.characterFound) {
    return (
      <section className="card">
        <div>
          <img
            className="card__img"
            src={props.characterFound.image}
            alt={`Foto de ${props.characterFound.name}`}
            title={`Foto de ${props.characterFound.name}`}
          ></img>
        </div>
        <div className="list">
          <h3 className="card__title">{props.characterFound.name}</h3>
          <p>
            Estatus:{GetStatus()}
            {""}
            {GetStatusIcon()}
          </p>
          <p>Especie:{props.characterFound.species}</p>
          <p>
            Género:{props.characterFound.gender}
            {""}
            {GetGender()}
          </p>
          <p>Casa:{props.characterFound.house}</p>
          {altName()}
          <Link className="card__link" to="/">
            Volver <i class="fa-solid fa-broom"></i>{" "}
          </Link>
        </div>
      </section>
    );
  } else {
    return NotFoundElem();
  }
};
CharacterDetail.defaultProps = {
  gender: "all",
  alive: true,
  names: "",
  image: "",
  species: "",
  house: "Gryffindor",
  alternate_names: [],
};
CharacterDetail.propTypes = {
  gender: PropTypes.string,
  alive: PropTypes.bool,
  names: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  house: PropTypes.string,
  alternate_names: PropTypes.arrayOf(PropTypes.string),
};
export default CharacterDetail;
