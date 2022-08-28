import CharacterCard from "./CharacterCard";
function CharacterList(props) {
  const itemElements = props.dataCharacters.map((each, id) => {
    return <CharacterCard each={each} id={id} key={id} />;
  });
  return (
    <section>
      <ul className="main">{itemElements}</ul>
    </section>
  );
}
export default CharacterList;
