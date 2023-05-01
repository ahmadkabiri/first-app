import React from "react";
import "./DeleteModal.css";
import ReactDOM from "react-dom";

export default function DeleteModal({submit,cancel}) {
  console.log(submit,cancel)
  return ReactDOM.createPortal(
    <div className='modal-parent active'>
    <div className="delete-modal">
      <h1>آیا از حذف اطمینان دارید؟</h1>
      <div className="delete-modal-btns">
        <button className="delete-btn delete-modal-accept-btn" onClick={() => submit()}>بله</button>
        <button className="delete-btn delete-modal-reject-btn" onClick={() => cancel()}>خیر</button>
      </div>
    </div>
    </div>
    ,

    document.getElementById("modals-parent")
  );
}
