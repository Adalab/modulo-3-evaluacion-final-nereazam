import "../styles/Components/CharacterCard.scss";
import { Link } from "react-router-dom";
const CharacterCard = (props) => {
  return (
    <li className="container">
      <Link to={`/character/${props.each.id}`}>
        <img
          className="container__img"
          src={props.each.image}
          alt={`Foto de ${props.each.name}`}
          title={`Foto de ${props.each.name}`}
        ></img>
        <h2 className="container__name">{props.each.name}</h2>
        <p className="container__species">{props.each.species}</p>
      </Link>
    </li>
  );
};
export default CharacterCard;
