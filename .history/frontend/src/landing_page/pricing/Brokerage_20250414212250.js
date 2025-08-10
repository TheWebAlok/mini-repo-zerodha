import React from "react";

function Brojerage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h3>Brokerage calculator </h3>
          <ul>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS): 0.5% or ₹100 per executed order for
              equity (whichever is lower)
            </li>
            <li>
              For NRI account (PIS): 0.5% or ₹200 per executed order for equity
              (whichever is lower)
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h3>List of charges</h3>
        </div>
      </div>
    </div>
  );
}

export default Brojerage;
