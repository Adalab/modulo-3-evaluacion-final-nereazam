import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FilterByGender from "./FilterByGender";
import FilterBySpecie from "./FilterBySpecie";
import "../styles/Components/Filters.scss";
import PropTypes from "prop-types";

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
          filterByGender={props.filterHouse}
          handleFilterByGender={props.handleFilterByGender}
        />
      </fieldset>
      <fieldset>
        <FilterBySpecie
          filterSpecie={props.filterSpecie}
          handleFilterSpecie={props.handleFilterSpecie}
        />
      </fieldset>
      <button className="btn" onClick={hadleReset}>
        Reset{" "}
      </button>
    </>
  );
}
Filters.defaultProps = {
  filterName: "",
  filterHouse: "Gryffindor",
  filterByGender: "all",
};
Filters.propTypes = {
  resetFilters: PropTypes.func,
  filterName: PropTypes.string,
  filterHouse: PropTypes.string,
  filterByGender: PropTypes.string,
  handleFilterByGender: PropTypes.func.isRequired,
  handleSelectHouse: PropTypes.func.isRequired,
  handleFilterName: PropTypes.func.isRequired,
};
export default Filters;
