import React, { Component } from 'react';
import "./MainDisplay.css"
class MainDisplay extends Component {
    render() {
        return (
            <div className="MainDisplay">
                <form>
                    <textarea cols="25" name="textbox" rows="8"></textarea>
                </form>
            </div>
        );
    }
}

export default MainDisplay;