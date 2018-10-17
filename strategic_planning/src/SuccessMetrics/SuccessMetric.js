import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./SuccessMetric.css"

class SuccessMetric extends Component {
    render() {
        return (
            <div className="grey">
                <SideBar />
                <form className="success">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Success Metric</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder={this.props.planner[0].successMetrics}></textarea>
                        <button type="button" class="btn btn-primary btn-lg">button</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SuccessMetric;