function FilterByGender(props) {
  const handleChange = (ev) => {
    props.handleFilterByGender(ev.target.value);
  };

  return (
    <>
      <label htmlFor="gender">Género:</label>
      <select
        name="gender"
        id="gender"
        value={props.filterByGender}
        onChange={handleChange}
      >
        <option value="all" selected>
          Todos
        </option>
        <option value="female">Mujer</option>
        <option value="male">Hombre </option>
      </select>
    </>
  );
}
export default FilterByGender;
