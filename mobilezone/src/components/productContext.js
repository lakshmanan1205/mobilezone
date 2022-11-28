import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";
import { newProducts } from "../clearData";

export const productList = React.createContext();

function ProductProvider(probs) {
  let [products, setProducts] = useState(storeProducts);

  let [cartproducts, setCartproducts] = useState([]);
  const [detailProducts, setDetailProducts] = useState(detailProduct);
  const [modelOpen, setModelOpen] = useState(false);
  const [modelProduct, setModelProduct] = useState(detailProducts);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [forClear, setForClear] = useState(newProducts);

  // useEffect(() => {
  //   const tempArray = JSON.parse(JSON.stringify(storeProducts));

  //   let tempProducts = [];
  //   storeProducts.forEach((item) => {
  //     const singleItem = { ...item };
  //     tempProducts = [...tempProducts, singleItem];
  //   });
  //   console.log(tempProducts);

  //   setForClear(tempProducts);

  //   return () => {
  //     // cleaning up the listeners here
  //   };
  // }, []);

  useEffect(() => {
    addTotals();
  }, [cartproducts, products]);

  // const initaiRun = () => {
  // let tempProducts = [];
  // storeProducts.forEach((item) => {
  //   const singleItem = { ...item };
  //   tempProducts = [...tempProducts, singleItem];
  // });
  // console.log(tempProducts);

  // return setForClear(tempProducts);
  // };
  // console.log(forClear);
  const addLaksh = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    return (
      setCartproducts([...cartproducts, product]),
      () => {
        addTotals();
      }
    );
  };

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };
  const handleDetail = () => {
    console.log("fromhandle");
  };
  const addToCart = (id) => {
    console.log("fromhcartandle");
  };
  const increament = (id) => {
    let tempCartProducts = [...cartproducts];
    const selectdProduct = tempCartProducts.find((item) => item.id === id);
    const index = tempCartProducts.indexOf(selectdProduct);
    const product = tempCartProducts[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    addTotals();
  };
  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCartProducts = [...cartproducts];
    tempCartProducts = tempCartProducts.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    // debugger;
    setCartproducts(tempCartProducts);
    setProducts(tempProducts);
  };
  const decreament = (id) => {
    let tempCartProducts = [...cartproducts];
    const selectdProduct = tempCartProducts.find((item) => item.id === id);
    const index = tempCartProducts.indexOf(selectdProduct);
    const product = tempCartProducts[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      addTotals();
    }
  };
  const clearCart = () => {
    products.some(changeCart);

    function changeCart(item) {
      item.inCart = false;
      item.count = 0;
      item.total = 0;
    }
    return setCartproducts([]);

    // setCartproducts([]);
  };
  const addTotals = () => {
    let subTotal = 0;
    cartproducts.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  return (
    <productList.Provider
      value={{
        products,
        cartproducts,
        setCartproducts,
        detailProducts,
        setDetailProducts,
        handleDetail,
        addToCart,
        modelOpen,
        setModelOpen,
        modelProduct,
        setModelProduct,
        addLaksh,
        increament,
        removeItem,
        decreament,
        clearCart,
        cartSubTotal,
        cartTax,
        cartTotal,
        addTotals,
        forClear,
      }}
    >
      {probs.children}
    </productList.Provider>
  );
}

export default ProductProvider;
