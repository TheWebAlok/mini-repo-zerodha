import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* <div className="row  p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h1>
      </div> */}

      <div className="row  p-5 mt-5 border-bottom text-center  ">
        <h1>Pricing</h1>
        <p className="text-muted mt-3 fs-5">
          Free equity investments and flat 20 traday and F&O trades
        </p>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-4 p-5">
            <img src="media/pricingEquity.svg" />
            <h1>Free equ</h1>
            <p></p>
        </div>
       
      </div>
    </div>
  );
}

export default Hero;
