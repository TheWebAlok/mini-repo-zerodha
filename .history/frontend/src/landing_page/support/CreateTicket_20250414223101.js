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
          <a href=""style={}> Online Account Opening</a>
          <a href=""style={}>Offline Account Opening</a>
          <a href=""style={}>Compnay Partnership and HUF Account Opening</a>
          <a href=""style={}>NRI Account Opening</a>
          <a href=""style={}>Charges at Zerodha</a>
          <a href=""style={}>Zerodha IDFC First Bank 3-in-1 Account</a>
          <a href=""style={}>Getting Started</a>
          
        </div>
        <div className="col4"> Your Zerodha Account</div>
        <div className="col4">Your Zerodha Account</div>
      </div>
    </div>
  );
}

export default CreateTicket;
