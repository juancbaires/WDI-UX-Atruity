import React, { Component } from "react";
import "./App.css";
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
import logo from "./logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
console.log("this");
library.add(faPen);

let planner = [
  {
    name: "Apple",

    visionStatement:
      "Apple designs Macs, the best personal computers in the world, along with OS X, iLife, iWork and professional software. Apple leads the digital music revolution with its iPods and iTunes online store. Apple has reinvented the mobile phone with its revolutionary iPhone and App store, and is defining the future of mobile media and computing devices with iPad.",
    swot:
      "Apple Inc.’s success is linked to the ability to use business strengths to overcome weaknesses and threats, and to exploit opportunities in the industry environment. A SWOT analysis of the company gives insights on the strategic actions of the business, especially in maximizing its growth based on its strengths and opportunities. The SWOT analysis framework is a strategic management decision-making tool that determines the most pressing issues facing the company, based on the internal business conditions and the external environment. In this case, the SWOT analysis of Apple Inc. scans the business for relevant strengths, weaknesses, opportunities, and threats (SWOT variables), with reference to various industries and markets.",
    orgStructure:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    successMetrics:
      "Raw sales numbers are not as motivating. Make no mistake about it, sales are important, but the focus is on making a product that really works for people so they tell friends “I love my Apple whatever-it-is”, and so when the next whatever-it-is is release people think about the joy the last one gave them and decide a new one will give more joy (or maybe they skip the next new one and buy the one after that). Also important is “I love my Apple whatever-it-is, and now I think the Apple some-other-thing would be just as awesome, I think I’ll get that one too!",
    goals:
      "Strategic Goals of Apple Inc. Based on Apple’s current vision and mission statements, the firm has cited three major long-termstrategic goals which are environmental responsibilities, leveraging the ability to design and develop and finally to enhance and expand [Dea14]. The first strategic goal is a section of the firm’s vision statement which is to be a company that spearheads innovation. Therefore, Apple wants to direct its attention on the utilization of renewable energies in businesses despite facing challenges of unavailability of these energy in store areas. The company is trying to keep its promise on environmental responsibility through the removal of toxic products in their production activities and products [App14].",
    executiveSummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget."
  }
];

class App extends Component {
  state = {
    planner: planner,
    task: [
      {
        employee: "Juan",
        task: "Make this mock-up"
      },
      {
        employee: "Luis",
        task: "take is Ezy"
      },
      {
        employee: "Felix",
        task: "Do some code stuff"
      },
    ]
  };
  //add a goal to planner data
  addplan = plan => {
    this.state.planner[0].goals = plan;
  };
  //edit mission prop
  addMission = mission => {
    this.state.planner[0].visionStatement = mission;
  };
  // edit swot
  addSwot = swotie => {
    this.state.planner[0].swot = swotie;
  };
  // editing an Org
  addOrg = org => {
    this.state.planner[0].orgStructure = org;
  };
  // editing a Metric
  addMetrics = metric => {
    this.state.planner[0].successMetrics = metric;
  };
  // edit summary
  addSummary = sum => {
    this.state.planner[0].executiveSummary = sum;
  };

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
                    addSummary={this.addSummary}
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
                    addMetrics={this.addMetrics}
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
                    addOrg={this.addOrg}
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
                    addSwot={this.addSwot}
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
              <Route
                path="/dashboard"
                render={props => (
                  <Dashboard
                    {...this.state}
                    {...this.props}
                    task={this.state.task}
                  />
                )}
              />
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
