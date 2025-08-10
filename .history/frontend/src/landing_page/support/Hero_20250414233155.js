import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="p-3 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-3 ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do i active F&O, why is my order getting rejected" />
          <a href="">Track Account Opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intaday margins</a>
          <a href="">Kite user manual</a>
        </div>

        <div className="col-6 p-3">
          <h1 className="">Feature</h1>
          <ol>
            <li>
              <a href="">Intaday margins</a>
            </li>
            <li>
              {" "}
              <a href="">Kite user manual</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
