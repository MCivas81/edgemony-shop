import { useState } from "react";
import "./Error.css";

function Error({ setRetry }) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="Error-banner">
      <div className="Error-container">
        <span className="Error-txt">OOps! Loading Error</span>
        <button className="Error-retryBtn" type="button" onClick={() => setRetry(true)}>
          Retry
        </button>
        <button className="Error-closeBtn" type="button" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
  ) : null;
}

export default Error;
