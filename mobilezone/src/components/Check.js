import React, { useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { productList } from "./productContext";

// function Check() {
//   const cart = useContext(productList);
//   const amount = cart.cartTotal;
//   return (
//     <>
//       <PayPalScriptProvider
//         options={{
//           "client-id":
//             "AeozmQBoix90YtkUyFgELSTDVuATuqNS7dDpHTExvg4M_Eyuk8peVts8uM2rkkyr3Hcnfkx6bXvFJQ_5",
//         }}
//       >
//         <PayPalButtons
//           createOrder={(data, actions) => {
//             return actions.order.create({
//               purchase_units: [
//                 {
//                   amount: {
//                     value: 13,
//                   },
//                 },
//               ],
//             });
//           }}
//           onApprove={(data, actions) => {
//             return actions.order.capture().then((details) => {
//               const name = details.payer.name.given_name;
//               alert(`Transaction completed by ${name}`);
//               // cart.clearCart();
//             });
//           }}
//         />
//       </PayPalScriptProvider>
//     </>
//   );
// }
const Check = () => {
  return (
    <>
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
    </>
  );
};
export default Check;
