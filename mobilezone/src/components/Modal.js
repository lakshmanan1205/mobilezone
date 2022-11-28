import React, { useContext } from "react";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { productList } from "./productContext";
function Modal() {
  const modal = useContext(productList);
  if (!modal.modelOpen) {
    return null;
  } else {
    return (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5"
            >
              <h5>Item added to the cart</h5>
              <img
                src={modal.modelProduct.img}
                alt="modalproduct"
                className="img-fluid"
              />
              <h5>{modal.modelProduct.title}</h5>
              <h5 className="text-muted">
                prioce: ${modal.modelProduct.price}
              </h5>
              <Link to="/">
                <ButtonContainer onClick={() => modal.setModelOpen(false)}>
                  store
                </ButtonContainer>
              </Link>
              <Link to="/cart">
                <ButtonContainer cart onClick={() => modal.setModelOpen(false)}>
                  cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ModalContainer>
    );
  }
}

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
