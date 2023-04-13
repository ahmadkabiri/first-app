import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
    // LineStyleIcon,
    // TimelineIcon,
    // TrendingUpIcon ,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to='/' className="link">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon"></LineStyleIcon>
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon></TimelineIcon>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon></TrendingUpIcon>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to='/users' className="link">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon"></PermIdentity>
              Users
            </li>
            </Link>
            <Link to='/newUser' className="link">
            <li className="sidebarListItem">
              <PermIdentity></PermIdentity>
              New User
            </li>
            </Link>
            <Link to='/products' className="link">
            <li className="sidebarListItem">
              <Storefront></Storefront>
              Products
            </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney></AttachMoney>
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart></BarChart>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon"></MailOutline>
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed></DynamicFeed>
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline></ChatBubbleOutline>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon"></WorkOutline>
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon></TimelineIcon>
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report></Report>
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
