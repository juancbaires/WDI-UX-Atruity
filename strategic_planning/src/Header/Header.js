import React, { Component } from "react";
import Bootstrap, { Button } from "bootstrap-4-react";
class Header extends Component {
  render() {
    return (
      <div>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link dashboard" href="#">
              Dashboard
            </a>
          </li>
          <li class="nav-item roadmap">
            <a class="nav-link" href="#">
              Roadmap
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link learning-hub" href="#">
              Learning Hub
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link plan-builder" href="#">
              Plan Builder
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link published-plans" href="#">
              Published Plans
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
