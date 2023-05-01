import React from "react";
import "./EditModal.css";
import { useEffect } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";

function EditModal({ children, onClose, onSubmit }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", checkKey);

    return () => window.removeEventListener("keydown", checkKey);
  });

  return (
    <div className="modal-parent active">
      <form className="edit-modal-form">
        <h1>اطلاعات جدید را وارد نمایید</h1>

        {/* {children} */}

        <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text"
            className="edit-product-input"
            placeholder="عنوان جدید را وارد کنید"
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text"
            className="edit-product-input"
            placeholder="عنوان جدید را وارد کنید"
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text"
            className="edit-product-input"
            placeholder="عنوان جدید را وارد کنید"
          />
        </div>
        <div className="edit-products-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text"
            className="edit-product-input"
            placeholder="عنوان جدید را وارد کنید"
          />
        </div>

        <button className="edit-form-submit" onClick={onSubmit}>
          ثبت اطلاعات جدید
        </button>
      </form>
    </div>
  );
}

export default EditModal;
