import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2">Trust with confidence</h1>
          <h2 >Customer-first always</h2>
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
        <div className="col-6 p-5">
          <img src="media/ecosystem.png" style={{ width: "100%" }} />
          <div className="text-center">
            <a href="" className="mx-5">Explore our product<i class="fa fa-long-arrow-right"  aria-hidden="true"></i>
            </a>
            <a href="" className="mx-5"> Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
