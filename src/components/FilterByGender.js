import "../styles/Components/FilterByGender.scss";

function FilterByGender(props) {
  const handleChange = (ev) => {
    props.handleFilterByGender(ev.target.value);
  };

  return (
    <>
      <label className="form__label" htmlFor="gender">
        Género:
      </label>
      <select
        className="form__select"
        name="gender"
        id="gender"
        value={props.filterByGender}
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre </option>
      </select>
    </>
  );
}
export default FilterByGender;
