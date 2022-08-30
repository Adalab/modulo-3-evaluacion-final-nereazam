import PropTypes from "prop-types";
import "../styles/Components/CharacterList.scss";
import CharacterCard from "./CharacterCard";
function CharacterList(props) {
  const itemElements = props.filteredCharacters.map((each) => {
    return (
      <CharacterCard
        characterFound={props.characterFound}
        each={each}
        key={each.id}
      />
    );
  });
  return (
    <section>
      <div className="main">
        <ul className="main__ul">{itemElements}</ul>
      </div>
    </section>
  );
}
CharacterList.defaultProps = {
  filteredCharacters: [],
  characterFound: "",
};
CharacterList.propTypes = {
  filteredCharacters: PropTypes.arrayOf(PropTypes.object).isRequired,
  characterFound: PropTypes.func,
};
export default CharacterList;
