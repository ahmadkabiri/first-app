import React from "react";
import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon></NotificationsIcon>
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <LanguageIcon></LanguageIcon>
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <SettingsIcon></SettingsIcon>
          </div>

          <img src="images/npm.png" alt="" className="topAvatar" />

        </div>
      </div>
    </div>
  );
}
