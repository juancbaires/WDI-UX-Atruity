import React, { Component } from "react";
import "./App.css";
import MainDisplay from "../MainDisplay/MainDisplay";
import SideBar from "../SideBar/SideBar";
import { Switch, Link, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import RoadMap from "../RoadMap/RoadMap";
import LearningHub from "../LearningHub/LearningHub";
import PublishedPlans from "../PublishPlans/PublishPlans";
import PlanBuilder from "../PlanBuilder/PlanBuilder";
import Mission from "../Mission/Mission";
import SWOT from "../SWOT/SWOT";
import OrgStructure from "../OrgStructure/OrgStructure";
import SuccessMetrics from "../SuccessMetrics/SuccessMetric";
import Goals from "../Goals/Goals";
import ExecutiveSummary from "../ExecutiveSummary/ExecutiveSummary";
import logo from "./logo.png"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
console.log('this')
library.add(faPen)

let planner = [
  {
    name: "Apple",

    visionStatement:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    swot:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    orgStructure:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    successMetrics:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    goals:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    executiveSummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget."
  }
];

class App extends Component {
  state = {
    planner: planner
  };
  //add a goal to planner data
  addplan = (plan) => {
    this.state.planner[0].goals = plan
  }
  //edit mission prop 
  addMission = (mission) => {
    this.state.planner[0].visionStatement = mission
  }
  // edit swot
  addSwot = (swotie) => {
    this.state.planner[0].swot = swotie
  }
  // editing an Org
  addOrg = (org) => {
    this.state.planner[0].orgStructure = org
  }
  // editing a Metric
  addMetrics = (metric) => {
    this.state.planner[0].successMetrics = metric
  }
  // edit summary
  addSummary = (sum) => {
    this.state.planner[0].executiveSummary = sum
  }

  render() {
    return (
      <div className="App">
        <nav>
          <img class="nav justify-content-right" src={logo} alt="Atruity" />
          <section className="centerLinks">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <Link to="/dashboard">
                  {" "}
                  <p class="nav-link dashboard">Dashboard</p>
                </Link>
              </li>
              <li class="nav-item roadmap">
                <Link to="/roadmap">
                  <p class="nav-link">Roadmap</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/learninghub">
                  <p class="nav-link learning-hub">Learning Hub</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/planbuilder">
                  <p class="nav-link plan-builder">Plan Builder</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/publishedplans">
                  <p class="nav-link published-plans">Published Plans</p>
                </Link>
              </li>
            </ul>
          </section>
        </nav>

        <main>
          <div>
            <Switch>
              <Route
                path="/executivesummary"
                render={props => (
                  <ExecutiveSummary
                    {...this.state}
                    {...this.props}
                    planner={this.state.planner}
                  />
                )}
              />{" "}
              />
              <Route
                path="/goals"
                render={props => (
                  <Goals
                    {...this.state}
                    {...this.props}
                    planner={this.state.planner}
                    addplan={this.addplan}
                  />
                )}
              />
              />
              <Route
                path="/successmetrics"
                render={props => (
                  <SuccessMetrics
                    {...this.state}
                    {...this.props}
                    planner={this.state.planner}
                  />
                )}
              />{" "}
              />
              <Route
                path="/orgstructure"
                render={props => (
                  <OrgStructure
                    {...this.state}
                    {...this.props}
                    planner={this.state.planner}
                  />
                )}
              />
              />
              <Route
                path="/swot"
                render={props => (
                  <SWOT
                    {...this.state}
                    {...this.props}
                    planner={this.state.planner}
                  />
                )}
              />
              />
              <Route
                path="/mission"
                render={props => (
                  <Mission
                    {...this.state}
                    {...this.props}
                    planner={this.state.planner}
                    addMission={this.addMission}
                  />
                )}
              />
              />
              <Route
                path="/planbuilder"
                render={props => (
                  <PlanBuilder
                    {...this.state}
                    {...this.props}
                    planner={this.state.planner}
                  />
                )}
              />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/learninghub" component={LearningHub} />
              <Route path="/roadmap" component={RoadMap} />
              <Route
                path="/publishedplans"
                render={props => (
                  <PublishedPlans
                    {...this.state}
                    {...this.props}
                    planner={this.state.planner}
                  />
                )}
              />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
