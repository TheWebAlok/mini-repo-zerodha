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
            Not justan app but a whole ecosystem. Our investments in 30+ fintech
            startup offers you tailored service specific to your needs.
          </p>

          <h2>Do better with money</h2>
          <p>
            With initiatives like Nudge and kill Switch, we don't just
            facilitate transaction but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img src="media/ecosystem.png" style={{ width: "75%" }} />
          <div className="text-center">
            <a href="" className="mx-5">Explore our  </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
