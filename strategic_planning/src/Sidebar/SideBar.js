import React, { Component } from "react";
import Bootstrap, { toggle } from "bootstrap-4-react";
import "./SideBar.css";

class SideBar extends Component {
<<<<<<< HEAD
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
=======
    render() {
        return (
            <div className="SideBar" >
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Step 1 Intro</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Step 2 Mission/Vission</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Step 3 SWOT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Step 4 Org Structure</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Step 5 Success Metrics</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Step 6 Goals</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Step 7 Executive Summary</a>
                    </li>
                </ul>
            </div>
        );
    }
>>>>>>> c5596d51ed22112e5d18d1694f9d121e7b8e85d1
}

export default SideBar;
