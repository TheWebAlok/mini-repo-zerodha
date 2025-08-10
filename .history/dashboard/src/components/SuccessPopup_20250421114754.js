import React from "react";
import "./SuccessPopup.css";

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>{message}</p>
        <button onClick={onClose} className="btn btn-blue">Close</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
