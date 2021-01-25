import react, { useState } from "react";

function Header(props) {
  const [show, setShow] = useState(false);

  const Modal = (
    <div className="app">
      <div className="overlay" onClick={() => setShow(false)}></div>
      <div className="showmenu">
        <button className="closeModal" onClick={() => setShow(!show)}>
          <i className="fas fa-times"></i>
        </button>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
        </ul>
      </div>
    </div>
  );
  return (
    <div className="app">
      <header className="headerSection">
        <a href="#" className="logo">
          Damian
        </a>
        <button className="menu-bar" onClick={() => setShow(!show)}>
          <i className="fas fa-bars"></i>
        </button>
      </header>
      {show ? Modal : null}
    </div>
  );
}

export default Header;
