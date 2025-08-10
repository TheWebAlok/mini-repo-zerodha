import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import SuccessPopup from "./SuccessPopup";

import "./BuyActionWindow.css"; // Use same CSS

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [showPopup, setShowPopup] = useState(false);

  const handleSellClick = async () => {
    try {
      const res = await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

      if (res.status === 200 || res.status === 201) {
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Sell failed:", error);
    }

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <>
      <div className="container" id="sell-window" draggable="true">
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Expected Credit ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
          <div>
            <Link className="btn btn-blue" onClick={handleSellClick}>
              Sell
            </Link>
            <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </Link>
          </div>
        </div>
      </div>

      {showPopup && (
        <SuccessPopup
          message="Sell Order Placed Successfully!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default SellActionWindow;
