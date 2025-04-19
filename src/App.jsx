import React from "react";
import "./App.css";
import Navbar from "./Root/Navbar";
import Home from "./Root/Home";
import Productlist from "./Product/ProductList";
import Admin from "./Product/ProductAdmin";
import Create from "./Product/CreateProduct";
import Update from "./Product/UpdateProduct";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/productlist" element={<Productlist />} />

          <Route path="/Admin" element={<Admin />} />

          <Route path="/Create" element={<Create />} />

          <Route path="/Update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
