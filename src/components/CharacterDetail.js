import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <section class="card">
      <Link to="/">Volver</Link>

      <img
        src={props.characterFound.image}
        alt={`Foto de ${props.characterFound.name}`}
        title={`Foto de ${props.characterFound.name}`}
      ></img>
      <h3>{props.characterFound.name}</h3>
      <p>{props.characterFound.species}</p>
      <p>casa:{props.characterFound.house}</p>
      <p>género{props.characterFound.gender}</p>
      <p>{props.characterFound.status}</p>
    </section>
  );
};
export default CharacterDetail;
