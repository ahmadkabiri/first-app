import React, { useState } from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import ProductsSection from "./Components/ProductsSection/ProductsSection";



function App() {

  return (
    <div>
      <Navbar></Navbar>
      <main className="pb-5">
        <div className="container">
          <h1 className="text-center main-title">All Products</h1>
          <ProductsSection title='Phones'></ProductsSection>
          <ProductsSection title='Laptops'></ProductsSection>
          <ProductsSection title='Coolpads'></ProductsSection>
          <ProductsSection title='Watches'></ProductsSection>
        </div>
      </main>
    </div>
  );
}

export default App;
