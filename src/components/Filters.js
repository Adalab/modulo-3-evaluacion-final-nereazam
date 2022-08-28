import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
function Filters(props) {
  const hadleReset = (ev) => {
    ev.preventDefault();
    props.resetFilters();
  };
  return (
    <>
      <FilterByName
        searchName={props.searchName}
        handleImputName={props.handleImputName}
      />
      <FilterByHouse />
      <button onClick={hadleReset}>Reset </button>
    </>
  );
}
export default Filters;
