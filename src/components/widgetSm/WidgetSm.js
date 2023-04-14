import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./WidgetSm.css";
import { newMembers } from "../../datas";
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => (
          <li key={user.id} className="widgetSmListItem">
            <img src={user.img} alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.userName}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon"></VisibilityIcon>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
