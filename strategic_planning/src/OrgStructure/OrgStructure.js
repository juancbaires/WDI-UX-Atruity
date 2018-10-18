import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./OrgStructure.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class OrgStructure extends Component {
    state = {
        orgStructure: null
    }
    handleChange = (e) => {
        this.setState({
            orgStructure: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addOrg(this.state.orgStructure)
    }
    render() {
        return (
            <div className="grey">
                <SideBar />
                <form className="org">
                    <div class="form-group">
                        <h2 for="exampleFormControlTextarea1">Orginazation Structure</h2>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder={this.props.planner[0].orgStructure} onChange={this.handleChange}></textarea>
                        <button onClick={this.handleSubmit} type="button" class="btn btn-primary btn-lg"><FontAwesomeIcon icon="pen" /></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default OrgStructure;