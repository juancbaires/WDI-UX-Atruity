import React, { Component } from "react";
import Bootstrap, { toggle } from "bootstrap-4-react";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
