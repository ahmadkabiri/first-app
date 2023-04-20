import React, { useState } from "react";
import WithToggle from "./HOCs/WithToggle";

function ToggleNoteList({isShow , toggleHandler }) {
 

  return (
    <div>
      <form></form>
      <button onClick={toggleHandler} className="btn btn-primary mt-5">
        {
            isShow ? '-' : '+' 
        }
      </button>

      {isShow && (
        <form action="#" className="form">
          <div className="form-group">
            <label>Add NewNote</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Add New Note
          </button>
        </form>
      )}
    </div>
  );
}

export default WithToggle(ToggleNoteList);
