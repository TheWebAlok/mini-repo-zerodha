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
            <div className="col-6 ">
                  <h1>{productName}</h1>
                  <p>{ProductDescription}</p>
                  <div className="">
                  <a href={tryMore}>Try Demo</a>
                  <a href={learnMore}>learn More</a>
                  </div>
                  
            </div>
      </div>
  </div>;
}

export default LeftSection;
