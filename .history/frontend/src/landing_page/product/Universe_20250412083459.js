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

        <div className="col-4 p-3">
          <img src="media/smallcaseLogo.png" />
          <p className="text"

        </div>
        <div className="col-4 p-3">
          <img src={imageUrl} />
        </div>
        <div className="col-4 p-3">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default Universe;
