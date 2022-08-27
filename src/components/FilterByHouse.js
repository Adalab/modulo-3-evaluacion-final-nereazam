function FilterByHouse(props) {
  const handleChange = (ev) => {
    //   props.handleFilterByGender(ev.target.value);
  };

  return (
    <>
      <label for="house">Seleciona la casa</label>
      <select
        name="house"
        id="house"
        value={props.searchHouse}
        onChange={handleChangeHouse}
      >
        <option value="Gryffindor" selected>
          Gryffindor
        </option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </>
  );
}
export default FilterByHouse;
