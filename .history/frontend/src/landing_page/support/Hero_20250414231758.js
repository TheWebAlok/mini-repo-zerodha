import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="p-2 mt-5 mb-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-2 mt-5 mb-5">
        <div className="col-6 p-2 mt-5 mb-5">
            <h1>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder="Eg: how do i active F&O, why is my order getting rejected"/>
            <a>Track Account Opening</a>
            <a>Track segment active</a>
            <a></a>
            <a></a>
        </div>
            
            <div className="col-6 p-2 mt-5 mb-5"><h1>Feature</h1></div>
      </div>
    </div>
  );
}

export default Hero;
