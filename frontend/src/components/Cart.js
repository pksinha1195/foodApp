import React from "react";
import "../index.css";
import "./Cart.css";

function Cart() {
  return (
    <>
      <div className="container-fluid cart-container">
        <div style={{ height: "100px", fontSize: "32px" }}>
          <p>Shopping Cart</p>
          <hr />
        </div>
        <div>
          {/* // order items */}
          <div className="d-flex justify-content-around mb-2">
            <div className="flex-grow-2">item Name</div>
            <div>Quantity</div>
            <div>price per unit</div>
            <div>total</div>
          </div>
          <div className="cart-header">
            <div>Butter paneer</div>
            <div>2</div>
            <div>250</div>
            <div>500</div>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="align-self-end">
          <p>
            Total:
          </p>
          <hr />
          <button
            className="px-4 mx-4"
            style={{ backgroundColor: "yellowgreen" }}
          >
            Proceed
          </button>
        </div>
        {/* <div>
          The price and availability of items at Amazon.in are subject to
          change. The shopping cart is a temporary place to store a list of your
          items and reflects each item's most recent price. Do you have a
          promotional code? We'll ask you to enter your claim code when it's
          time to pay.
        </div> */}
      </div>
    </>
  );
}

export default Cart;
