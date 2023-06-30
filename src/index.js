import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/store";
import {
  counterIncrementAction,
  counterDecrementAction,
  counterRestartAction
} from "./redux/actionCreator";

const root = ReactDOM.createRoot(document.getElementById("root"));
const render  = () => root.render(
  <BrowserRouter>
    <App
      counter={store.getState()}
      onIncrement={() => store.dispatch(counterIncrementAction())}
      onDecrement={() => store.dispatch(counterDecrementAction())}
      onRestart = {() => store.dispatch(counterRestartAction())}
    />
  </BrowserRouter>
  // <App></App>
);

render()

store.subscribe(render)



