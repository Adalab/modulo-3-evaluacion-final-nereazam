import CharacterCard from "./CharacterCard";
function CharacterList(props) {
  const itemElements = props.filteredCharacters.map((each, id) => {
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
      <div>
        <ul className="main">{itemElements}</ul>
      </div>
    </section>
  );
}
export default CharacterList;
