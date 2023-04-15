import React from "react";
import { useState } from "react";
import { products } from "../../datas";
import "./Products.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

export default function UserList() {
  const [productsData, setProductsData] = useState(products);

  const productsDelete = (userId) => {
    setProductsData(productsData.filter(product =>product.id !=userId))
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} >
            <div className="userListUser">
              <img src={params.row.avatar} alt="" className="userListImg" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline 
            className="userListDelete"
            onClick={()=>productsDelete(params.row.id)}
            ></DeleteOutline>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={productsData}
        columns={columns}
        disableSelectionOnClick
        pageSize={3}
        checkboxSelection
      ></DataGrid>
    </div>
  );
}

