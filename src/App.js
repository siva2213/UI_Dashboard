import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import SideNav from "./components/Navs/sideNav";
import TopNav from "./components/Navs/topNav";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="left_container">
          <SideNav />
        </div>
        <div className="right_container">
          <div className="right_container_nav">
            <TopNav />
          </div>
          <div className="right_container_body">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">ZIRCOS</a>
                </li>
                <li className="breadcrumb-item">
                  <a href={this.props && this.props.location.pathname}>
                    {this.props &&
                      this.props.location.pathname.slice(1).toUpperCase()}
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {this.props &&
                    this.props.location.pathname.slice(1).toUpperCase()}
                </li>
              </ol>
            </nav>
            <Route path="/dashboard" name="DASHBOARD" component={Dashboard} />
            <Route path="/userInterface" name="USER INTERFACE" />
            <Route path="/adminUi" name="ADMIN UI" />
            <Route path="/calendar" name="CALENDAR" />
            <Route path="/email" name="EMAIL" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
