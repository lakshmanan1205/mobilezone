import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { productList } from "./productContext";

export const forDetails = React.createContext;

function Product(probs) {
  const details = useContext(productList);

  let { id, title, img, price, inCart } = probs.product;
  // useEffect(
  //   (() => {
  //   },
  //   [inCart])
  // );

  const getItem = (id) => {
    const product = details.products.find((item) => item.id === id);
    return product;
  };
  const clickHandlerDetils = () => {
    return details.setDetailProducts(probs.product);
  };
  // const clickHandlerCart = () => {
  //   console.log("you clicked");
  //   console.log(id);
  //   let tempProducts = [...details.products];
  //   const index = tempProducts.indexOf(getItem(id));
  //   const product = tempProducts[index];
  //   product.inCart = true;
  //   product.count = 1;
  //   const price = product.price;
  //   product.total = price;
  //   return details.addLaksh(id), console.log(details.checkPro);
  // [details.setCartproducts(product)],
  // };
  const openModel = (id) => {
    const product = getItem(id);
    details.setModelProduct(product);
    return details.setModelOpen(true);
  };
  // const closeModel = (id) => {
  //   return details.setModelOpen(false);
  // };
  return (
    <>
      <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto">
        <div className="card  mb-4" id="bgColor">
          <div className="img-container p-5" onClick={clickHandlerDetils}>
            <Link to="/details">
              <img src={img} alt="productImage" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                // clickHandlerCart(id);
                openModel(id);
                details.addLaksh(id);
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0 p-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus"></i>
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="ms-5">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    </>
  );
}

export default Product;
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    border-top: transparent;
    background: transparent;
    transition: all 0.5s linear;
  }
  &: hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      border: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute !important;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    color: var(--mainWhite);
    border: none;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0%, 0%);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: poinetr;
  }
`;
