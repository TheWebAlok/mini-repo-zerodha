import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  p-5 mt-5 border-top  mb-5">
        <h1 className="fs-2  text-center">People</h1>
      </div>

      <div
        className="row  p-5 mt-5 border-top text-muted fs-6"
        style={{ lineHeight: "1.8" }}
      >
        <div className="col-6">
            <img src="media/nithinKamath.jpg" style={{borderRadius: "100%", width: "60%"}}/>
            <h4>nithinKamath</h4>
        </div>
        <div className="col-6 ">
          <p>
            This project aims to develop a user-friendly and efficient web
            application that addresses a real-world problem by leveraging modern
            web technologies. It focuses on delivering an intuitive interface,
            seamless navigation, and effective functionality.
          </p>
          <p>
            This project aims to develop a user-friendly and efficient web
            application that addresses a real-world problem by leveraging modern
            web technologies. It focuses on delivering an intuitive interface,
            seamless navigation, and effective functionality.
          </p>
          <p>
            This project aims to develop a user-friendly and efficient web
            application that addresses a real-world problem by leveraging modern
            web technologies. It focuses on delivering an intuitive interface,
            seamless navigation, and effective functionality.
          </p>
          <p>
            This project aims to develop a user-friendly and efficient web
            application that addresses a real-world problem by leveraging modern
            web technologies. It focuses on delivering an intuitive interface,
            seamless navigation, and effective functionality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
