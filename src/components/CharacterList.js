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
      <divl className="main">
        <ul className="main__ul">{itemElements}</ul>
      </divl>
    </section>
  );
}
export default CharacterList;
