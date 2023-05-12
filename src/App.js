import React, { useState } from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import products from "./data/products";
import Toast from "./Components/Toast/Toast";
import Cart from "./Components/Cart/Cart";
function App() {

  const [allProducts] =  useState(products)

  return (
    <div>
      <Navbar></Navbar>
      <main className="pb-5">
        <div className="container">
          <h1 className="text-center main-title">All Products</h1>
          {
            allProducts.map(product=>(
              <ProductsSection {...product}></ProductsSection>
            ))
          }

        </div>
      </main>
      <Toast></Toast>
      <Cart/>
    </div>
  );
}

export default App;
