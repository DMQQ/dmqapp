import react, { useState } from "react";
import img from "../images/undraw_source_code_xx2e.svg";

function Section2() {
  const [show, setShow] = useState(false);
  return (
    <div className="app">
      <section className="section2-container">
        <div className="section2-img">
          <img src={img} alt="img" />
        </div>
        <div className="textContainer">
          <div className="center">
            <div className="text-content">
              <h1>Welcome to my page</h1>
            </div>
            <p>Technologies i used to build: React, SCSS,GSAP</p>
          </div>
          <div className="section2-btn-box">
            <button className="sct2-btn" onClick={() => setShow(!show)}>
              {show ? "JK" : "More Info"}
            </button>
            <button className="sct2-btn">Buy website</button>
          </div>
        </div>
      </section>
      <button className="scrolldown sct2">
        <i className="fas fa-arrow-down"></i>
      </button>
    </div>
  );
}

export default Section2;
