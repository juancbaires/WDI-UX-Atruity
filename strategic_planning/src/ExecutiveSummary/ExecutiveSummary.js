import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./ExecutiveSummary.css"
class ExecutiveSummary extends Component {
    render() {
        return (
            <div class="grey">
                <SideBar />
                <form className="executive">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Executive Summary</label>
                        <textarea class="form-control" id="" rows="8" placeholder={this.props.planner[0].executiveSummary}></textarea>
                        <button type="button" class="btn btn-primary btn-lg">button</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ExecutiveSummary;