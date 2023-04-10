import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Wellcome to about page</h3>

      <button
        onClick={() => {
          navigate("/login", {
            replace: true,
          });
        }}
      >
        ثبتنام در دوره
      </button>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="setting">Setting</Link>
        <Link to="dashboard">Dashboard</Link>
      </div>
      <hr />
      <Outlet></Outlet>
    </div>
  );
}
