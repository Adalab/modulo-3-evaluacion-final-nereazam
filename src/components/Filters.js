import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FilterByGender from "./FilterByGender";
function Filters(props) {
  const hadleReset = (ev) => {
    ev.preventDefault();
    props.resetFilters();
  };
  return (
    <>
      <FilterByName
        filterName={props.filterName}
        handleInputName={props.handleInput}
      />
      <FilterByHouse
        filterHouse={props.filterHouse}
        handleSelectHouse={props.handleSelectHouse}
      />
      <FilterByGender
        filterByGender={props.filterByGender}
        handleFilterByGender={props.handleFilterByGender}
      />
      <button onClick={hadleReset}>Reset </button>
    </>
  );
}
export default Filters;
