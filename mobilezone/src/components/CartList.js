import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { productList } from "./productContext";

function CartList(probs) {
  const myCart = useContext(productList);
  return (
    <>
      <div className="container-fluid">
        {myCart.cartproducts.map((item) => {
          if (item.inCart === true) {
            return <CartItem key={item.id} item={item} />;
          }
        })}
      </div>
      {/* <CartItem /> */}
    </>
  );
}

export default CartList;
