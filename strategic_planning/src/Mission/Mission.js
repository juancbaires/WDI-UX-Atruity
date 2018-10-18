import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./Mission.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class Mission extends Component {
    state = {
        visionStatement: null
    }
    handleChange = (e) => {
        this.setState({
            visionStatement: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMission(this.state.visionStatement)
    }
    render() {
        return (
            <div className="grey">
                <SideBar />
                <form className="mission">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Our Mission</label>
                        <textarea class="form-control" id="visionStatement" rows="8" placeholder={this.props.planner[0].visionStatement} onChange={this.handleChange}></textarea>
                        <button onClick={this.handleSubmit} type="button" class="btn btn-primary btn-lg"><FontAwesomeIcon icon="pen" /></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Mission;