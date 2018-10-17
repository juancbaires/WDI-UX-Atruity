import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./SWOT.css"
class SWOT extends Component {
    render() {
        return (
            <div className="grey">
                <SideBar />
                <form className="swot">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">S.W.O.T.</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder={this.props.planner[0].swot}></textarea>
                        <button type="button" class="btn btn-primary btn-lg">button</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SWOT;