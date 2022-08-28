function FilterByName(props) {
  const handleEnter = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
    }
  };

  const handleChange = (ev) => {
    props.handleInputName(ev.target.value);
  };
  return (
    <>
      <label htmlFor="name">Busca por personaje</label>
      <input
        type="text"
        id="name"
        placeholder="Introduzca aqui un nombre"
        name="name"
        value={props.searchName.name}
        onKeyUp={handleChange}
        onKeyPress={handleEnter}
      />
    </>
  );
}
export default FilterByName;
