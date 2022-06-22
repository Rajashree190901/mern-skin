import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-light shadow p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          <img
            src="https://seeklogo.com/images/B/beauty-logo-01BFD0572A-seeklogo.com.png"
            style={{ width: 40, marginTop: -7 }}
          />
          SPARKLE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="dropdown mt-2">
                <a
                  style={{ color: "black" }}
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <div
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item ">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <img
                  className="cartimg"
                  src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                />
                Cart {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
