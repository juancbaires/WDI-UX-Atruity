import React, { Component } from "react";
import Bootstrap, { toggle } from "bootstrap-4-react";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <ul class="nav flex-column">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Plan Type
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Strategic Plan
              </a>
              <a class="dropdown-item" href="#">
                Startup Plan
              </a>
              <a class="dropdown-item" href="#">
                Internal Business Plan
              </a>
              <a class="dropdown-item" href="#">
                Feasibility Plan
              </a>
              <a class="dropdown-item" href="#">
                Operations Plan
              </a>
              <a class="dropdown-item" href="#">
                Growth Plan
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Step 1 Intro
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Step 2 Mission/Vission
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Step 3 SWOT
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Step 4 Org Structure
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Step 5 Success Metrics
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Step 6 Goals
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Step 7 Executive Summary
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
