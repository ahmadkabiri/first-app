import React, { useState } from "react";
import { Route,Routes,useRoutes } from "react-router-dom";

import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import routes from "./routes";

function App() {

  const router = useRoutes(routes)

  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        {/* <Routes>
          <Route path="/products" element={<Products/>}/>
          <Route path="/comments" element={<Comments/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/offs" element={<Offs/>}/>
        </Routes> */}
        {router}
      </div>
    </>
  );
}

export default App;
