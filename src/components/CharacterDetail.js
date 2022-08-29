import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const NotFoundElem = () => {
    return <h1>El elemento buscado no existe!</h1>;
  };
  const GetStatusIcon = () => {
    if (props.characterFound.alive === true) {
      return <i className="fa-solid fa-heart-pulse"></i>;
    } else {
      return <i class="fa-solid fa-skull"></i>;
    }
  };
  const GetStatus = () => {
    if (props.characterFound.alive === true) {
      return "Alive";
    } else {
      return "Dead";
    }
  };
  const GetGender = () => {
    if (props.characterFound.gender === "female") {
      return <i class="fa-solid fa-venus"></i>;
    } else {
      return <i class="fa-solid fa-mars"></i>;
    }
  };

  const altName = () => {
    return props.characterFound.alternate_names.length > 0 ? (
      <h3>
        Nombre alternativo:
        {props.characterFound.alternate_names.map((name) => name + "/")}
      </h3>
    ) : (
      []
    );
  };
  if (props.characterFound) {
    return (
      <section className="card">
        <Link to="/">Volver </Link>
        <img
          src={props.characterFound.image}
          alt={`Foto de ${props.characterFound.name}`}
          title={`Foto de ${props.characterFound.name}`}
        ></img>
        <h3>{props.characterFound.name}</h3>
        <p>
          Estatus:{GetStatus()} {""}
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
      </section>
    );
  } else {
    return NotFoundElem();
  }
};
export default CharacterDetail;
