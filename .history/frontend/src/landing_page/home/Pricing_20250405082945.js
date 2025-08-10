import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="">Unbeatable Pricing</h1>
          <p className="mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="mx-5" style={{ textDecoration: "none" }}>
            See pricing
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
            <div className="row te">
                  <div className="col">
                        <h1>₹0</h1>
                        <p>
                              Free equity delivery and direct mutual funds
                        </p>
                  </div>
                  <div className="col">
                        <h1>₹20</h1>
                        <p>
                              Free equity delivery and direct mutual funds
                        </p>
                  </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
