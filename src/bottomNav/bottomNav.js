import React from "react";
import boo from "./images.png";
<script src="https://kit.fontawesome.com/c2c37d2633.js" crossorigin="anonymous"></script>
const Bottomnavbar = () => {
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div >|

          <span>ورود|</span>
          <span>ثبت نام </span>
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
        <div style={{ position: "relative" }}>
          <input
            style={{
              position: "absolute",
              width: "100px",
              right: "170px",
              top: "20px",
              padding: "10px",
              width: "500px",
              backgroundColor: "rgba(223, 230, 233,1.0)",
              borderRadius: "8px",
              border: "none",
            }}
            placeholder='جستجو'
          />
          <img
            src={boo}
            style={{
              position: "absolute",
              height: "50px",
              width: "150px",
              right: "10px",
              top: "15px",
            }}
            alt="Error"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bottomnavbar;
