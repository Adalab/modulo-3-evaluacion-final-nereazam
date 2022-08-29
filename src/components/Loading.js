import "../styles/Components/Loading.scss";
const Loading = (props) => {
  return props.loading ? (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  ) : null;
};

export default Loading;
