import React from "react";

function LeftSection({
  imageUrl,
  productName,
  ProductDescription,
  tryMore,
  learnMore,
  googlePLay,
  appStore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row p-5">
        <div className="col-6 ">
          <img src={imageUrl} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          <div className="">
            <a href={tryMore}>Try Demo</a>
            <a href={learnMore} style={{marginLeft: "1200px"}} >learn More</a>
          </div>
          <div className="mt-3">
            <a href={googlePLay}>
              <img src="media/googlePLayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/appstoreBadge.svg"style={{margin:"50px"}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
