import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import "./planBuilder.css";

class PlanBuilder extends Component {
  render() {
    console.log(this.props.planner);
    return (
      <div className="grey">
        <SideBar />

        <form className="planBuild">
          <div class="form-group">
            <h2 for="exampleFormControlTextarea1">Tutorial</h2>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              placeholder="This is where a video would be!"
            />
            <button type="button" class="btn btn-primary btn-lg">
              Play
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PlanBuilder;
