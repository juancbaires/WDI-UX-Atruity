import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <SideBar />
        {this.props.task.map(task => {
          return (
            <div id="tasks" class=" card w-50">
              <div class="card-body">
                <h2 class="card-title">{task.employee}</h2>
                <p class="card-text">{task.task}</p>
              </div>
            </div>

          );
        })}
      </div>
    );
  }
}

export default Dashboard;
