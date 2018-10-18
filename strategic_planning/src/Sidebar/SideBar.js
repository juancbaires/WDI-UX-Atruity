import React, { Component } from "react";
import Bootstrap, { toggle } from "bootstrap-4-react";
import "./SideBar.css";
import { Link, Route, Switch } from "react-router-dom";
import Mission from "../Mission/Mission";

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <ul className="sideItem" class="nav flex-column">
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
            <Link to="/planbuilder">
              <a class="nav-link active" href="#">
                Step 1- Intro
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/mission">
              <a class="nav-link" href="#">
                Step 2- Mission/Vision
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/swot">
              <a class="nav-link" href="#">
                Step 3- SWOT
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/orgstructure">
              <a class="nav-link" href="#">
                Step 4- Org Structure
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/successmetrics">
              <a class="nav-link" href="#">
                Step 5- Success Metrics
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/goals">
              <a class="nav-link" href="#">
                Step 6- Goals
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/executivesummary">
              <a class="nav-link" href="#">
                Step 7- Executive Summary
              </a>
            </Link>
          </li>
        </ul>
        <main />
      </div>
    );
  }
}

export default SideBar;
