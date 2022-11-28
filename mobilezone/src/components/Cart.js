import React, { useContext } from "react";
import Title from "../components/Title";
import { productList } from "./productContext";
import CartColumns from "../components/CartColumns";
import EmptyCart from "../components/EmptyCart";
import CartList from "../components/CartList";
import CartTotals from "../components/CartTotals";

function Cart() {
  const cart = useContext(productList);
  //cart.cartproducts.length
  {
    if (cart.cartproducts.length > 0) {
      return (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList value={cart} />;
          <CartTotals />
        </>
      );
    } else {
      return (
        <>
          <EmptyCart />;
        </>
      );
    }
  }
}

export default Cart;
