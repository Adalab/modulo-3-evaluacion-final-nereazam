import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const altName = () => {
    return props.characterFound.alternate_names !== [] ? (
      <h3>Nombre alternativo:{props.characterFound.alternate_names}</h3>
    ) : (
      ""
    );
  };
  return (
    <section className="card">
      <Link to="/">Volver </Link>
      <img
        src={props.characterFound.image}
        alt={`Foto de ${props.characterFound.name}`}
        title={`Foto de ${props.characterFound.name}`}
      ></img>
      <h3>{props.characterFound.name}</h3>
      <p>Estatus:{props.characterFound.status} </p>
      <p>Especie:{props.characterFound.species}</p>
      <p>Género:{props.characterFound.gender}</p>
      <p>Casa:{props.characterFound.house}</p>
      {altName()}
    </section>
  );
};
export default CharacterDetail;
