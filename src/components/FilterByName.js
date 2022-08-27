function FilterByName(props) {
  const handelInput = (ev) => {
    props.handelInput(ev.currentTarget.value);
  };

  return (
    <>
      <label htmlFor="name">Busca por personaje</label>
      <input
        type="text"
        id="name"
        placeholder="Introduzca aqui un nombre"
        name="name"
        value={props.searchName}
        onChange={handelInput}
        // onKeyDown={handelInput}
      />
    </>
  );
}
export default FilterByName;
