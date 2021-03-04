import "./Loading.css";

function Loading() {
  return (
    <div className="Loading-banner">
      <span className="Loading-text">Loading</span>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
