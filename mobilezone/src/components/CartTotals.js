import React, { useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { productList } from "./productContext";
import { Link } from "react-router-dom";
function CartTotals() {
  const cart = useContext(productList);
  const amount = cart.cartTotal;
  // const initialOptions = {
  //   "client-id":
  //     "AUFVbOUMgoAD81Mr16w7HvpzQoHUkPpDgz9DdgQedEg51VOfei8uP7-Mv59mslNrAXhEzGhdmXxz7LlV",
  //   currency: "INR",
  //   intent: "capture",
  //   "data-client-token": "abc123xyz==",
  // };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-center">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => cart.clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal:</span>
              <strong>${cart.cartSubTotal} </strong>
            </h5>
            <h5>
              <span className="text-title">tax:</span>
              <strong>${cart.cartTax} </strong>
            </h5>
            <h5>
              <span className="text-title">total:</span>
              <strong>$ {cart.cartTotal}</strong>
            </h5>
            <div className="paypal-container col-10 mx-auto col-md-4 col-lg-4">
              <Link to="/form">
                <button class="btn btn-success">CHECK OUT</button>
              </Link>
            </div>

            {/* <Pay total={cart.cartTotal} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotals;
//ref
{
  /* <div>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AeozmQBoix90YtkUyFgELSTDVuATuqNS7dDpHTExvg4M_Eyuk8peVts8uM2rkkyr3Hcnfkx6bXvFJQ_5",
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: 13,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                alert(`Transaction completed by ${name}`);
                // cart.clearCart();
              });
            }}
          />
        </PayPalScriptProvider>
      </div> */
}

//use it
{
  //    <PayPalScriptProvider
  //   options={{
  //     "client-id":
  //       "AeozmQBoix90YtkUyFgELSTDVuATuqNS7dDpHTExvg4M_Eyuk8peVts8uM2rkkyr3Hcnfkx6bXvFJQ_5",
  //   }}
  // >
  //   <PayPalButtons
  //     createOrder={(data, actions) => {
  //       return actions.order.create({
  //         purchase_units: [
  //           {
  //             amount: {
  //               value: cart.cartTotal,
  //             },
  //           },
  //         ],
  //       });
  //     }}
  //     onApprove={(data, actions) => {
  //       return actions.order.capture().then((details) => {
  //         const name = details.payer.name.given_name;
  //         alert(`Transaction completed by ${name}`);
  //         cart.clearCart();
  //       });
  //     }}
  //   />
  // </PayPalScriptProvider>;
}
