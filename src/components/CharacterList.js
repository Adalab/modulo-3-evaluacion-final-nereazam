import CharacterCard from "./CharacterCard";
function CharacterList(props) {
  const itemElements = props.filteredCharacters.map((each, id) => {
    return <CharacterCard each={each} id={id} key={each.id} />;
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
