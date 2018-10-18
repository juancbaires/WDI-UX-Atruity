import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./Goals.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Goals extends Component {
    state = {
        goals: null
    }
    handleChange = (e) => {
        this.setState({
            goals: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addplan(this.state.goals)
    }
    render() {
        return (
            <div className="grey">
                <SideBar />
                <form className="goals">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Goals</label>
                        <textarea class="form-control" id="goals" rows="8" placeholder={this.props.planner[0].goals} onChange={this.handleChange}></textarea>
                        <button onClick={this.handleSubmit} type="button" class="btn btn-primary btn-lg"><FontAwesomeIcon icon="pen" /></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Goals;