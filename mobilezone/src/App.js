import React from "react";

import "./App.css";
import { Routes, Route, Form } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import DetailsForm from "./components/DetailsForm";
import Check from "./components/Check";
//new export

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<ProductList />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/form" element={<DetailsForm />}></Route>
        <Route path="*" element={<Check />}></Route>

        <Route path="*" element={<Default />}></Route>
      </Routes>
      <Modal />
    </>
  );
}

export default App;
