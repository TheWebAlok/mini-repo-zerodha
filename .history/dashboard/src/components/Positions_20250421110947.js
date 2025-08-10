import React, { useEffect, useState } from "react";
import { VerticalGraph } from "./VerticalGraph";
// import { positions } from "../data/data";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  useEffect(() =>{
    axios.get("http://localhost:3002/allPositions").then((res)=>{
      setAllPositions(res.data);
    })
  }, []);
  const labels = allPositions.map((item) => item["stockName"]); // ya `symbol`, jo bhi ho schema mein
  const data = {
    labels,
    datasets: [
      {
        label: "Quantity",
        data: allPositions.map((item) => item.quantity),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };
  
  return (
    <>
      <h3 className="title">Positions ({Positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <VerticalGraph data={data} />
          
    </>
  );
};

export default Positions;
