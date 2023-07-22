// import { log } from 'console'
import React from "react";

import { connect } from "react-redux";
import { addProductAction } from "../Redux/store/Products";

function Products(props) {
  console.log(props);
  return (
    <>
    <ul>
      Products List :
      {props.products.map((product) => (
        <li>{product.title}</li>
      ))}
    </ul>

    <hr />

    <button onClick={props.addProduct}>Add New Product</button>
    </>
  );
}

function mapStateToProps(state) {
  console.log("Store", state);
  return {
    products: state.products,
    testParam: "Test Property",
  };
}

function mapDispatchToProps (dispatch) {

    return {
        addProduct : () => dispatch(addProductAction({id : 4 , title : "pen" , price : 30_000})) 
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Products);
