import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-header ">
      <div className="container">
        <a className="navbar-brand" href="#order">
          <img src={logo} alt="logo here" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <a
              className="nav-link active text-white"
              aria-current="page"
              href="#order"
            >
              Order
            </a>
            <a className="nav-link text-white" href="#order">
              Order Review
            </a>
            <a className="nav-link text-white" href="#order">
              Manage Inventory
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
