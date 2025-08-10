import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};
axios.post("http://localhost:3002/newOrder", {
  name: "TCS",
  qty: 5,
  price: 3200,
  mode: "CNC"
})
.then(res => {
  console.log("Order Saved:", res.data);
})
.catch(err => {
  console.error("Error:", err.response?.data || err.message);
});

export default Orders;
