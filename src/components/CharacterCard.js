import { Link } from "react-router-dom";
const CharacterCard = (props) => {
  return (
    <li>
      <Link to={`/user/${props.each.id}`}>
        <img
          className="img-card"
          src={props.each.image}
          alt={`Foto de ${props.each.name}`}
          title={`Foto de ${props.each.name}`}
        ></img>
        <h3>{props.each.name}</h3>
        <p>{props.each.species}</p>

        <p>Ver Detalle</p>
      </Link>
    </li>
  );
};
export default CharacterCard;
