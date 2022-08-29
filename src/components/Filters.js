import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FilterByGender from "./FilterByGender";
import "../styles/Components/Filters.scss";

function Filters(props) {
  const hadleReset = (ev) => {
    ev.preventDefault();
    props.resetFilters();
  };
  return (
    <>
      <fieldset>
        <FilterByName
          filterName={props.filterName}
          handleFilterName={props.handleFilterName}
        />
      </fieldset>
      <fieldset>
        <FilterByHouse
          filterHouse={props.filterHouse}
          handleSelectHouse={props.handleSelectHouse}
        />
      </fieldset>
      <fieldset>
        <FilterByGender
          filterByGender={props.filterByGender}
          handleFilterByGender={props.handleFilterByGender}
        />
      </fieldset>
      <button className="btn" onClick={hadleReset}>
        Reset{" "}
      </button>
    </>
  );
}
export default Filters;
