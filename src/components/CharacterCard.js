import "../styles/App.scss";
import { Link } from "react-router-dom";
const CharacterCard = (props) => {
  /*const getPlaceholderText = () => {
    return( src= "https://via.placeholder.com/210x295/ggggg/584555/?text=Undefined")
  }
  const renderPlaceholderOrImage =() => {
src=== "" ? {getPlaceholderText()}: {props.each.image}
  };*/
  return (
    <li className="licontainer">
      <Link to={`/user/${props.id}`}>
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
