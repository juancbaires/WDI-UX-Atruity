import React, { Component } from 'react';
import SideBar from "../Sidebar/SideBar"
import MainDisplay from "../MainDisplay/MainDisplay"

class PlanBuilder extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <MainDisplay />
            </div>
        );
    }
}

export default PlanBuilder;