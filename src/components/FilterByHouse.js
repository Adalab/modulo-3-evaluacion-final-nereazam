function FilterByHouse(props) {
  const handleChange = (ev) => {
    props.handleHouseSelect(ev.target.value);
  };

  return (
    <>
      <label htmlFor="house">Seleciona la casa</label>
      <select
        name="house"
        id="house"
        value={props.searchHouse}
        onChange={handleChange}
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
