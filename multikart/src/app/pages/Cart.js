import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/cart.css";

function Cart() {
  return (
    <div>
      <div className="containerfluid bg-cart">
        <div className="row ">
          <div className="col-lg-6 offset-1">
            <h2 className="cart_header_heading">CART</h2>
          </div>
          <div className="col-lg-2  offset-2">
            <ul className="d-flex list-unstyled">
              <li className="ms-2">
                <Link className="text-decoration-none list_heading" to="/">
                  HOME
                </Link>
                <span className="fs-5 ps-2 list_heading ">/</span>
              </li>
              <li className="ms-2">
                <Link className="text-decoration-none list_heading">CART</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
          <div className="row">
            <div className="col-12 text-center mt-5">
              <h3><strong>Your Cart is Empty</strong></h3>
              <h4>Explore More Sortlist Some Items</h4>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Cart;