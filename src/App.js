import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";

export default function App() {
  let router = useRoutes(routes);

  return (
    <div>
      <Topbar></Topbar>
      {router}
    </div>
  );
}
