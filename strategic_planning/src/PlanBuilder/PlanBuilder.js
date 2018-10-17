import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import MainDisplay from "../MainDisplay/MainDisplay"


class PlanBuilder extends Component {
    render() {
        console.log(this.props.planner)

        return (


            <div>
                <SideBar />
                <MainDisplay />
            </div>
        );
    }
}

export default PlanBuilder;