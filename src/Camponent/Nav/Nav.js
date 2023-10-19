import React from "react";
import "./Nav.scss";
export default function Nav() {
  // const dark = ()=> {
  //   document.getElementsByTagName('body')[0].style.backgroundColor = "black";
  // }
  return (
    <>
      <div className="container-fluid position-sticky fixed-top" id="nav-co-f">
        <div className="container p-3">
          <nav className="navbar navbar-expand-md navbar-dark">
            {/* <p onClick={dark}>Click</p> */}
            <a className="navbar-brand " href="/">
              <h1>
                C<span className="text-info">STYLE</span>
              </h1>
            </a>
            <button
              className="navbar-toggler bg-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="collapsibleNavbar" 
            >
              <ul className="navbar-nav">
                <li className="nav-item p-2">
                  <a href="/Home" className="nav-link">
                    CATALOGUE
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a href="/About" className="nav-link">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a href="/Servive" className="nav-link">
                    FASHION
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a href="/Project" className="nav-link">
                    FAVOURITE
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a href="/Contact" className="nav-link">
                    LIFESTYLE
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a href="/Contact" className="nav-link">
                    SIGN UP
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
