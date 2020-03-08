import React, { Component } from "react";

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="top_nav_container">
        <div className="top_nav_container_list">
          <div className="top_nav_container_item">
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
            />
          </div>
          <div className="top_nav_container_item">New</div>
          <div className="top_nav_container_item">
            <select
              name="country names"
              style={{ width: "100px", background: "white", border: "none" }}
            >
              <option value="India">India</option>
              <option value="Germany">Germany</option>
              <option value="Italian">Italian</option>
            </select>
          </div>
        </div>
        <div className="top_nav_container_list">
          <div className="top_nav_container_item">
            <i className="material-icons">notification_important</i>
          </div>
          <div className="top_nav_container_item">
            <i className="material-icons">email</i>
          </div>
          <div className="top_nav_container_item">
            <i className="material-icons">settings</i>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
