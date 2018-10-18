import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./SWOT.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class SWOT extends Component {
    state = {
        swot: null
    }
    handleChange = (e) => {
        this.setState({
            swot: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSwot(this.state.swot)
    }
    render() {
        return (
            <div className="grey">
                <SideBar />
                <form className="swot">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">S.W.O.T.</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder={this.props.planner[0].swot} onChange={this.handleChange}></textarea>
                        <button onClick={this.handleSubmit} type="button" class="btn btn-primary btn-lg"><FontAwesomeIcon icon="pen" /></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SWOT;