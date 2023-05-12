import React from "react";
import { useState } from "react";
import { userRows } from "../../datas";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

export default function UserList() {
  const [userDatas, setUserDatas] = useState(userRows);

  const userDelete = (userId) => {
    setUserDatas(userDatas.filter(user =>user.id !==userId))
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="">
            <div className="userListUser">
              <img src={params.row.avatar} alt="" className="userListImg" />
              {params.row.userName}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      with: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline 
            className="userListDelete"
            onClick={()=>userDelete(params.row.id)}
            ></DeleteOutline>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={4}
      ></DataGrid>
    </div>
  );
}
