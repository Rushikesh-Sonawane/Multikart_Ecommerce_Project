import React from "react";
// import { Link } from "react-router-dom";
import "../../assets/css/cart.css";

function Cart() {
  return (
    <div>
      <div className="containerfluid bg-cart">
        <div className="row ">
          <div className="col-lg-6">
            <h2 className="cart_header_heading">CART</h2>
          </div>
          <div className="col-lg-2  offset-2">
            <ul className="d-flex list-unstyled">
              <li className="ms-2">
                <a className="text-decoration-none list_heading" to="/">
                  HOME
                </a>
                <span className="fs-5 ps-2 list_heading ">/</span>
              </li>
              <li className="ms-2">
                <a className="text-decoration-none list_heading">CART</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
          <div className="row">
            <div className="col-12 ">
              <p>Your Cart is Empty</p>
              <p>Explore More Sortlist Some Items</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Cart;