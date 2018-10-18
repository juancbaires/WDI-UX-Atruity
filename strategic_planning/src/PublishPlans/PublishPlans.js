import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./PublishPlans.css"
class PublishPlans extends Component {

    render() {


        return (

            <div>
                <SideBar />
                <div class="card w-50">
                    <div class="card-body">
                        <h2 class="card-title">{this.props.planner[0].name}</h2>
                        <h3>Vision Statement</h3>
                        <p class="card-text">{this.props.planner[0].visionStatement}</p>
                        <h3>S.W.O.T.</h3>
                        <p class="card-text">{this.props.planner[0].swot}</p>
                        <h3>Goals</h3>
                        <p class="card-text">{this.props.planner[0].goals}</p>
                        <h3>Organization Structure</h3>
                        <p class="card-text">{this.props.planner[0].orgStructure}</p>
                        <h3>Success Metrics</h3>
                        <p class="card-text">{this.props.planner[0].successMetrics}</p>
                        <h3>Executive Summary</h3>
                        <p class="card-text">{this.props.planner[0].executiveSummary}</p>
                    </div>
                </div>
            </div >
        );
    }
}

export default PublishPlans;