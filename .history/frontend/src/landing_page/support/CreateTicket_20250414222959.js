import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row  p-5 mt-5 mb-5">
        <h1 className=" ">To create a ticket, select a relevant topic</h1>
        <div className="col4 p-5 mt-5 mb-5">
          
          <h4>
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            Account Opening
          </h4>
          <a>Offline Account Opening</a>
          <a>Compnay Partnership and HUF Account Opening</a>
          <a>NRI Account Opening</a>
          <a>Charges at Zerodha</a>
          <a>Zerodha IDFC First Bank 3-in-1 Account</a>
          <a>Getting Started</a>
          
          <a> Online Account Opening</a>
        </div>
        <div className="col4"> Your Zerodha Account</div>
        <div className="col4">Your Zerodha Account</div>
      </div>
    </div>
  );
}

export default CreateTicket;
