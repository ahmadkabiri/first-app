import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { addProductAction } from "./Redux/store/Products";

store.dispatch(addProductAction({ID : 1 , title: "LapTop" , price : 90_000_000}))
store.dispatch(addProductAction({ID : 2 , title: "Phone" , price : 15_000_000}))
store.dispatch(addProductAction({ID : 3 , title: "Milk" , price : 50_000}))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={store}>
     <App />
  </Provider>
  </BrowserRouter>
  // <App></App>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


