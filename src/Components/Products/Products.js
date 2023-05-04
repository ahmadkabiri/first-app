import React from 'react'
import "./Products.css"
import ProductsTable from '../ProductsTable/ProductsTable'
import AddNewProduct from '../AddNewProduct/AddNewProduct'


export default function Products() {
  return (
    <>
    <AddNewProduct/>
    <ProductsTable/>

    </>
  )
}
