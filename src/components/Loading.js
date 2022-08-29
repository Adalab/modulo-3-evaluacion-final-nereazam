import PropTypes from "prop-types";
import "../styles/Components/Loading.scss";
const Loading = (props) => {
  return props.loading ? (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  ) : null;
};
Loading.defaultProps = {
  loading: false,
};
Loading.propTypes = {
  loading: PropTypes.bool,
};

export default Loading;
