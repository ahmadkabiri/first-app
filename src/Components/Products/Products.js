import React from 'react'
import "./Products.css"
import Errorbox from '../Errorbox/Errorbox'
import ProductsTable from '../ProductsTable/ProductsTable'
import AddNewProduct from '../AddNewProduct/AddNewProduct'


export default function Products() {
  return (
    <>
    <AddNewProduct/>
    <Errorbox msg="هیچ محصولی یافت نشد"/>
    <ProductsTable/>

    </>
  )
}
