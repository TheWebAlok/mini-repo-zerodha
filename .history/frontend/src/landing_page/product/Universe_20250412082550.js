import React from "react";

function Universe({
  imageUrl,
  productName,
  ProductDescription,

  learnMore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and Investment experience even further with our
          partner platform.
        </p>

          <img src={imageUrl} />
        <div className="col-6 "></div>
        <div className="col-6 ">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default Universe;
