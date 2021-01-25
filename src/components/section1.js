import react from "react";
import sectionimg from "../images/undraw_Hello_qnas.svg";

function Section1() {
  return (
    <div className="app">
      <section className="section1-container">
        <div className="text-content">
          <div className="center">
            <h1>Welcome to my page</h1>
            <p>Technologies i used to build:</p>
            <p>React, SCSS,GSAP</p>
          </div>
        </div>
        <div className="section1-img">
          <img src={sectionimg} alt="" />
        </div>
      </section>
      <button className="scrolldown">
        <i className="fas fa-arrow-down"></i>
      </button>
    </div>
  );
}
export default Section1;
