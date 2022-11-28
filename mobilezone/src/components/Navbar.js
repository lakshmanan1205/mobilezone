import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "../components/Button";
import styled from "styled-components";
function Navbar() {
  return (
    <>
      <NavWrapper className="navbar navbar-expand navbar-dark ">
        <Link to="/" className="ps-5">
          <img src={logo} alt="logo" className="navbar-brand ms-5px" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-items ms-5">
            <Link to="/ " className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ms-auto">
          <ButtonContainer className="ms-15">
            <span className="me-2 px-2 py-1">
              <i className="fas fa-cart-plus"></i>
            </span>
            My cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    </>
  );
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(mainWhite) !important;
    font-family: "Oswald", sans-serif !important;

    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`;
export default Navbar;
