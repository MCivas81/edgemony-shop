import { useState } from "react";
import "./Error.css";

function Error({ retry, setRetry }) {
  const [isErrorOpen, setIsErrorOpen] = useState(true);

  return isErrorOpen ? (
    <div className="Error-banner">
      <div className="Error-container">
        <span className="Error-txt">OOps! Loading Error</span>
        <button className="Error-retryBtn" type="button" onClick={() => setRetry(!retry)}>
          Retry
        </button>
        <button className="Error-closeBtn" type="button" onClick={() => setIsErrorOpen(false)}>
          Close
        </button>
      </div>
    </div>
  ) : null;
}

export default Error;
