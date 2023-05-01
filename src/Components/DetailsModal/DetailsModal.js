import React from "react";
import { useEffect } from "react";
import "./DetailsModal.css";

export default function DetailsModal({onHide}) {
  
  useEffect(()=>{
    const checkKey = (event) => {
      if(event.keyCode===27){
        onHide()
      }
    }
    window.addEventListener("keydown",checkKey)

    return () => window.removeEventListener("keydown",checkKey)

  })

  return (
    <div className="modal-parent active">
      <div className="details-modal ">
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>لپتاپ</td>
              <td>12_000_000</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
