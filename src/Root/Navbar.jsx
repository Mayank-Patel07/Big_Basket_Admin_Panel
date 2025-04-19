import React, { useState } from "react";
// import { NavLink as a } from "react-router";
import { Link } from "react-router-dom";

export default function Navbar() {

  // used to set background color of navbar
  const [color, setcolor] = useState(" #030E03");

  return (
    <>
      <nav
        class={`navbar nav navbar-expand-lg navbar-light bg-${color}`}
        style={{
          background:
            "linear-gradient(to right, #030F03 0%, #155715 50%, #29A829 100%)",
          color: "white",
          padding: "7px 65px",
        }}
      >
        {/* <i class="fa-solid fa-basket-shopping"></i> */}
        {/* <i class="bi bi-cart3"></i> */}

        <Link a class="navbar-brand N heading text-white" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="currentColor"
            class="bi bi-cart-fill m-1"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          Big Basket
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <Link class="nav-link N text-white" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link N text-white" to="/productlist">
                All Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link N text-white" to="/create">
                Create Products
              </Link>
            </li>
          </ul>
          <li class="nav-item">
            <Link class="nav-link N text-white" to="/admin">
              Admin Panel
            </Link>
          </li>
        </div>
      </nav>
    </>
  );
}
