import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./OrgStructure.css"

class OrgStructure extends Component {
    render() {
        return (
            <div className="grey">
                <SideBar />
                <form className="org">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Orginazation Structure</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder={this.props.planner[0].orgStructure}></textarea>
                        <button type="button" class="btn btn-primary btn-lg">button</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default OrgStructure;