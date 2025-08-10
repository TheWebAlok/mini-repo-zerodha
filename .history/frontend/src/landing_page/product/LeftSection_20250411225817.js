import React from "react";

function LeftSection(
  imageUrl,
  productName,
  ProductDescription,
  tryMore,
  learnMore,
  googlePLay,
  appStore
) {
  return <div className="container">
      <div className="row">
            <div className="col-6 p-3">
                  <img src={imageUrl}/>
            </div>
            <div className="col-6">
                  <h1>{}</h1>
            </div>
      </div>
  </div>;
}

export default LeftSection;
