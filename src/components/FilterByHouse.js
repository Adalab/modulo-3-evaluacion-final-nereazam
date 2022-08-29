import "../styles/Components/FilterByHouse.scss";
function FilterByHouse(props) {
  const handleSelectHouse = (ev) => {
    props.handleSelectHouse(ev.currentTarget.value);
  };

  return (
    <>
      <label className="form__label" htmlFor="house">
        Seleciona la casa
      </label>
      <select
        className="form__select"
        name="house"
        id="house"
        value={props.filterHouse}
        onChange={handleSelectHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </>
  );
}
export default FilterByHouse;
