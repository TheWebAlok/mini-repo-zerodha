import React from 'react';

function Hero() {
      return ( <div className="container">
            <div className="row p-2 mt-5 mb-5">
              <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
      
              <div className="col-4 p-5 mt-2 mb-2">
                <h4>
                  <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
                </h4>
                
              {/* Repeat or map similar sections if needed */}
            </div>
          </div> );
}

export default Hero;