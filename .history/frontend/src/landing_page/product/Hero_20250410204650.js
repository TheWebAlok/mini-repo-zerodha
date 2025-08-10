import React from "react";

function Hero() {
  return (
    <div className="container mt-5 text-center text-muted">
      <h1>Technology</h1>
      <h3>Sleek modern and intuitive trading platform</h3>
      <p>
        Click out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          {" "}
          Investment offering{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
