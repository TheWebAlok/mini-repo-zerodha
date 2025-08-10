import React from "react";

function Stats() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Trust with confidence</h1>
          <h2>Customer-first always</h2>
          <p>
            That's why 13+ crore customer trust zerodha with 3.5 lakh crore
            worth of equality investments.
          </p>

          <h2>No spam or gimmicks </h2>
          <p>
            no gimmicks spam "gamification", or annoying push notification high
            quality apps that you use at your pace the way you like
          </p>

          <h2>The Zerodha universe </h2>
          <p>
              Not justan app but a whole ecosystem 
                    </p>
        </div>
        <div className="col-6">
          <img src="media/ecosystem.png" style={{ width: "75%" }} />
        </div>
      </div>
    </div>
  );
}

export default Stats;
