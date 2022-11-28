import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { productList } from "./productContext";
import { forDetails } from "./Product";

function Details() {
  const detailProduct = useContext(productList);
  const getItem = (id) => {
    const product = detailProduct.products.find((item) => item.id === id);
    return product;
  };
  const openModel = (id) => {
    const product = getItem(id);
    return (
      detailProduct.setModelProduct(product), detailProduct.setModelOpen(true)
    );
  };

  // const clickHandlerCart = (id) => {
  //   let tempProducts = [...detailProduct.products];
  //   const index = tempProducts.indexOf(getItem(id));
  //   const product = tempProducts[index];
  //   product.inCart = true;
  //   product.count = 1;
  //   const price = product.price;
  //   product.total = price;
  //   return [detailProduct.setCartproducts(product)], console.log(detailProduct);
  // };
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{detailProduct.detailProducts.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-md-6 mx-auto my-3 ">
            <img
              src={detailProduct.detailProducts.img}
              className="img-fluid"
              alt="product"
            />
          </div>
          <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
            <h2>model:{detailProduct.detailProducts.model}</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2 ">
              made by:
              <span className="text-uppercase">
                {detailProduct.detailProducts.company}
              </span>
            </h4>
            <h4 className="text-blue">
              <strong>
                price:
                <span>$</span>
                {detailProduct.detailProducts.price}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product
            </p>
            <p className="text-muted lead">
              {detailProduct.detailProducts.info}
            </p>

            <Link to="/">
              <ButtonContainer>Back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              disabled={detailProduct.detailProducts.inCart ? true : false}
              onClick={() => {
                detailProduct.addLaksh(detailProduct.detailProducts.id);
                openModel(detailProduct.detailProducts.id);
              }}
            >
              {detailProduct.detailProducts.inCart ? "Incart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
