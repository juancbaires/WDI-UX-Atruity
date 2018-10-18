import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./ExecutiveSummary.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class ExecutiveSummary extends Component {
    state = {
        executiveSummary: null
    }
    handleChange = (e) => {
        this.setState({
            executiveSummary: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSummary(this.state.executiveSummary)
    }
    render() {
        return (
            <div class="grey">
                <SideBar />
                <form className="executive">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Executive Summary</label>
                        <textarea class="form-control" id="" rows="8" placeholder={this.props.planner[0].executiveSummary} onChange={this.handleChange}></textarea>
                        <button onClick={this.handleSubmit} type="button" class="btn btn-primary btn-lg"><FontAwesomeIcon icon="pen" /></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ExecutiveSummary;