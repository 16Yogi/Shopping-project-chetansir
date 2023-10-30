import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
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
                  <Link to="/catogue" className="nav-link">
                    CATALOGUE
                  </Link>
                </li>
                <li className="nav-item p-2">
                  <Link to="/about" className="nav-link">
                    ABOUT US
                  </Link>                    
                </li>
                <li className="nav-item p-2">
                  <Link to="/fashion" className="nav-link">
                    FASHION
                  </Link>                    
                </li>
                <li className="nav-item p-2">
                  <Link to="/favioret" className="nav-link">
                    FAVOURITE
                  </Link>                    
                </li>
                <li className="nav-item p-2">
                  <Link to="/lifestyle" className="nav-link">
                    LIFESTYLE
                  </Link>
                </li>
                <li className="nav-item p-2">
                  <Link to="/singin" className="nav-link">
                    SIGN UP
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
