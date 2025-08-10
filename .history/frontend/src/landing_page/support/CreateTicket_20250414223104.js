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
          <a href=""style={{text}}> Online Account Opening</a>
          <a href=""style={{text}}>Offline Account Opening</a>
          <a href=""style={{text}}>Compnay Partnership and HUF Account Opening</a>
          <a href=""style={{text}}>NRI Account Opening</a>
          <a href=""style={{text}}>Charges at Zerodha</a>
          <a href=""style={{text}}>Zerodha IDFC First Bank 3-in-1 Account</a>
          <a href=""style={{text}}>Getting Started</a>
          
        </div>
        <div className="col4"> Your Zerodha Account</div>
        <div className="col4">Your Zerodha Account</div>
      </div>
    </div>
  );
}

export default CreateTicket;
