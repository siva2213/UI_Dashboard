import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerData: []
    };
  }
  render() {
    return (
      <div className="side_nav_container">
        <div className="brand_styling">
          <label>
            <span style={{ color: "white" }}>ZIR</span>
            <span style={{ color: "#1776BF" }}>COS</span>
          </label>
        </div>
        <small style={{ color: "#95A3AA", paddingLeft: "0.5rem" }}>
          NAVIGATION
        </small>
        <div className="side_nav_item">
          <NavLink
            activeStyle={{ color: "white" }}
            className="side_nav_item_link"
            to="/dashboard"
          >
            <div>
              <i class="material-icons">view_module</i>
            </div>
            <div>Dashboard</div>
          </NavLink>
        </div>
        <div className="side_nav_item">
          <NavLink
            activeStyle={{ color: "white" }}
            className="side_nav_item_link"
            to="/userInterface"
          >
            <div>
              <i class="material-icons">invert_colors</i>
            </div>
            <div>User Interface</div>
          </NavLink>
        </div>
        <div className="side_nav_item">
          <NavLink
            activeStyle={{ color: "white" }}
            className="side_nav_item_link"
            to="/adminUi"
          >
            <div>
              <i class="material-icons">layers</i>
            </div>
            <div>Admin UI</div>
          </NavLink>
        </div>
        <div className="side_nav_item">
          <NavLink
            activeStyle={{ color: "white" }}
            className="side_nav_item_link"
            to="/calendar"
          >
            <div>
              <i class="material-icons">calendar_today</i>
            </div>
            <div>Calendar</div>
          </NavLink>
        </div>
        <div className="side_nav_item">
          <NavLink
            activeStyle={{ color: "white" }}
            className="side_nav_item_link"
            to="/tables"
          >
            <div>
              <i className="material-icons">pie_chart </i>
            </div>
            <div>Tables</div>
          </NavLink>
        </div>
        <div className="side_nav_item">
          <NavLink
            activeStyle={{ color: "white" }}
            className="side_nav_item_link"
            to="/email"
          >
            <div>
              <i className="material-icons">email</i>
            </div>
            <div>Email</div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SideNav;
