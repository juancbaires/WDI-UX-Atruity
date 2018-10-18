import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./SuccessMetric.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class SuccessMetric extends Component {
    state = {
        successMetrics: null
    }
    handleChange = (e) => {
        this.setState({
            successMetrics: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMetrics(this.state.successMetrics)
    }
    render() {
        return (
            <div className="grey">
                <SideBar />
                <form className="success">
                    <div class="form-group">
                        <h2 for="exampleFormControlTextarea1">Success Metric</h2>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder={this.props.planner[0].successMetrics} onChange={this.handleChange}></textarea>
                        <button onClick={this.handleSubmit} type="button" class="btn"><FontAwesomeIcon icon="pen" /></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SuccessMetric;