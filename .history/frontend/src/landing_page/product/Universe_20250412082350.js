import React from 'react';

function Universe(
      {
            imageUrl,
            productName,
            ProductDescription,
           
            learnMore,
      }
) {
      return ( <div className="container mt-5 ">
            <div className="row text-center">
              <h1>The Zerodha Universe</h1>
              <p>Extend your trading and Investment experience even further with our partner platform.</p>

              <div className="col-6 p-5 mt-5">
                <h1>{productName}</h1>
                <p>{ProductDescription}</p>
                <div className="">
                  
                  <a
                    href={learnMore}
                    style={{ textDecoration: "none" }}
                  >
                    learn More{" "}
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
                
              </div>
              <div className="col-6 ">
                <img src={imageUrl} />
              </div>
            </div>
          </div>);
}

export default Universe;