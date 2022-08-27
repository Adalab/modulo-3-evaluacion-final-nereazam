import CharacterCard from "./CharacterCard";
function CharacterList(props) {
  const itemElements = props.characters.map((each, index) => {
    return <CharacterCard each={each} id={index} key={index} />;
  });
  return (
    <section>
      <ul>{itemElements}</ul>
    </section>
  );
}
export default CharacterList;
