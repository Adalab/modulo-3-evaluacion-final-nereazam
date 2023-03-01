function FilterBySpecie(props) {
  const handleFilterSpecie = (ev) => {
    props.handleFilterSpecie(ev.target.value);
  };
  return (
    <>
      <label htmlFor="specie">Busca por especie</label>
      <input
        type="text"
        id="specie"
        placeholder="Introduzca aqui un especie"
        name="specie"
        value={props.filterSpecie}
        onChange={handleFilterSpecie}
      />
    </>
  );
}
export default FilterBySpecie;
