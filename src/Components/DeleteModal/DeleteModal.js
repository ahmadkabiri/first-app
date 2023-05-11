import React from "react";
import "./DeleteModal.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";

export default function DeleteModal({ submit, cancel ,title }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        cancel();
      }
    };
    window.addEventListener("keydown", checkKey);

    return () => window.removeEventListener("keydown", checkKey);
  });

  console.log(submit, cancel);
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>{title}</h1>
        <div className="delete-modal-btns">
          <button
            className="delete-btn delete-modal-accept-btn"
            onClick={() => submit()}
          >
            بله
          </button>
          <button
            className="delete-btn delete-modal-reject-btn"
            onClick={() => cancel()}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
