import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import MainDisplay from "../MainDisplay/MainDisplay"
import "./planBuilder.css"

class PlanBuilder extends Component {
    render() {
        console.log(this.props.planner)
        return (
            <div className="grey">
                <SideBar />
                <MainDisplay />
                <form className="planBuild">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Tutorial</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="This is where a video would be!"></textarea>
                        <button type="button" class="btn btn-primary btn-lg">Play</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PlanBuilder;