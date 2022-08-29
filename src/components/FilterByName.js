import "../styles/Components/FilterByName.scss";
function FilterByName(props) {
  const handleEnter = (ev) => {
    if (ev.key === "Enter") {
    }
  };

  const handleFilterName = (ev) => {
    props.handleFilterName(ev.target.value);
  };
  return (
    <>
      <label className="form__label--title" htmlFor="name">
        Busca por personaje
      </label>
      <input
        className="form__input"
        type="text"
        id="name"
        placeholder="Introduzca aqui un nombre"
        name="name"
        value={props.filterName}
        onChange={handleFilterName}
        onKeyPress={handleEnter}
      />
    </>
  );
}
export default FilterByName;
