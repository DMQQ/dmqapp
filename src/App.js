import react, { useState } from "react";
import "./sass/index.css";
import Header from "./components/header";
import Section1 from "./components/section1";
import Section2 from "./components/section2";

function App() {
  return (
    <div className="app">
      <Header />
      <Container>
        <Section1 className="section1" />
        <Section2 className="section2" />
        <Section1 className="section3" />
        <Section2 className="section4" />
      </Container>
    </div>
  );
}
const Container = (props) => {
  return <div className="maincontainer">{props.children}</div>;
};

export default App;
