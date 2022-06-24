import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-header ">
      <div className="container">
        <a class="navbar-brand" href="#order">
          <img src={logo} alt="logo here" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto mb-2 mb-lg-0">
            <a
              class="nav-link active text-white"
              aria-current="page"
              href="#order"
            >
              Order
            </a>
            <a class="nav-link text-white" href="#order">
              Order Review
            </a>
            <a class="nav-link text-white" href="#order">
              Manage Inventory
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
