import React from 'react'
import "./Products.css"
import ProductsTable from '../ProductsTable/ProductsTable'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import { useEffect,useState } from 'react'

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };
  
  return (
    <>

    <AddNewProduct getAllProducts={getAllProducts}/>
    <ProductsTable allProducts={allProducts} getAllProducts={getAllProducts}/>

    </>
  )
}
