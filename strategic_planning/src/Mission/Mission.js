import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./Mission.css"

class Mission extends Component {
    render() {
        return (
            <div className="grey">
                <SideBar />
                <form className="mission">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Our Mission</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder={this.props.planner[0].visionStatement}></textarea>
                        <button type="button" class="btn btn-primary btn-lg">button</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Mission;