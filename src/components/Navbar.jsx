import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const refBTN = useRef(null);

  const setRef = () => {
    if (window.innerWidth < 699) {
      refBTN.current.click();
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
        style={{ backgroundColor: props.mode }}
      >
        <div className="container-fluid">
          <a
            className={`navbar-brand text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            href="/"
          >
            TextUtil
          </a>
          <button
            ref={refBTN}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/"
                  onClick={setRef}
                >
                  Home
                </Link>
              </li>
            </ul>
            <div
              className={`ml-1form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              style={{ width: "9rem" }}
            >
              <input
                onClick={props.handleDardMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                Dark Mode
              </label>
            </div>
            <div
              className={`ml-1form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              style={{ width: "9rem" }}
            >
              <input
                onClick={props.handleRedMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                Red Mode
              </label>
            </div>
            <div
              className={`ml-1form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              style={{ width: "9rem" }}
            >
              <input
                onClick={props.handleBlueMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                Blue Mode
              </label>
            </div>
            <div
              className={`ml-1form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              style={{ width: "9rem" }}
            >
              <input
                onClick={props.handleGreenMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                Green Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
