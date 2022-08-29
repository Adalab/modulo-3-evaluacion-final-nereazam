import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const NotFoundElem = () => {
    return <h1>El elemento buscado no existe!</h1>;
  };
  const GetStatusIcon = () => {
    props.characterFound.alive === true ? (
      <i className="fa-solid fa-heart-pulse"></i>
    ) : (
      <i class="fa-solid fa-skull"></i>
    );
  };

  const altName = () => {
    return props.characterFound.alternate_names.length > 0 ? (
      <h3>Nombre alternativo:{props.characterFound.alternate_names}</h3>
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
          Estatus:{props.characterFound.alive} {GetStatusIcon()}
        </p>
        <p>Especie:{props.characterFound.species}</p>
        <p>Género:{props.characterFound.gender}</p>
        <p>Casa:{props.characterFound.house}</p>

        {altName()}
      </section>
    );
  } else {
    return NotFoundElem();
  }
};
export default CharacterDetail;
