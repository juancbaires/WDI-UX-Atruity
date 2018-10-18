import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./Dashboard.css"

class Dashboard extends Component {
    render() {
        return (
            <div>
                <SideBar />
                {this.props.task.map(task => {
                    return (
                        <div class="card taskcard w-25">
                            <div class="card-body">
                                <h5 class="card-title">{task.employee}</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        );
    }
}

export default Dashboard;