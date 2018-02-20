/*Make the information appear on the Page*/
/*Import all plugins and files needed*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';

      /*Mars Colony Home page*/
      const Home = () =>
      <div>
      <h1>MARS COLONY</h1>
      <div className="enter-button">
      <a className="pulse" href="/check-in"></a>
      </div>
      <h2>Tap circle to enter</h2>
      </div>;

      /*Jobs API on page*/
      class CheckIn extends Component {
        constructor() {
          super();
          this.state = {
            loading: true,
            jobs: []
          };
        }
        componentDidMount() {
          axios.get('https://red-wdp-api.herokuapp.com/api/mars/jobs')
            .then(jobs => {
              this.setState({
                jobs: jobs.data.jobs
              });
            });
        }
        render() {
          return (
      /*Register page*/
      <div>
      <h1>REGISTER</h1>
      <form>
      <input className="name" type="letter" pattern="[a-zA-Z]+" placeholder="Name"></input><br />
      <input className="age" type="number" min="1" max="100" placeholder="Age"></input><br />
      <select className="select">
      <option value="default-job">Select Occupation</option>
      {this.state.jobs.map(jobs => {
      return <option>{jobs.name}</option>
    })}
      </select>
      </form>
      <a href="/encounters"><button className="checkin">Check In</button></a>
      </div>
    );
  }
}

    /*Encounters API on page*/
      class Encounters extends Component {
        constructor() {
          super();
          this.state = {
            loading: true,
            encounters: []
          };
        }
        componentDidMount() {
          axios.get('https://red-wdp-api.herokuapp.com/api/mars/encounters')
          .then(encounters => {
            this.setState({
              encounters: encounters.data.encounters
            });
          });
        }
        render() {
          return (
      /*Recent Enocunters page*/
      <div>
      <h1 className="title2">RECENT ENCOUNTERS</h1>
      <h2 className="sub-heading">See an Alien? Report it!</h2>
      <div className="encounter-div">
        {this.state.encounters.map(encounters => {
        return <div className="encounter-reports">{encounters.date} - {encounters.atype}<br/>{encounters.action}</div>
        })}
        </div>
      <a href="/report"><button className="report-it">Report Encounter</button></a>
      </div>
    );
  }
}

      /*Aliens API on page*/
      class Report extends Component {
        constructor() {
          super();
          this.state = {
            loading: true,
            aliens: []
          };
        }
        componentDidMount() {
          axios.get('https://red-wdp-api.herokuapp.com/api/mars/aliens')
            .then(aliens => {
              this.setState({
                aliens: aliens.data.aliens
              });
            });
        }
        render() {
          return (
      /*Report Encounters page*/
      <div>
      <h1 className="title2">REPORT ENCOUNTERS</h1>
      <h2 className="sub-heading">Safety on Mars is your responsibility</h2>
      <form>
      <select className="select">
      <option value="default-alien">Select Alien Type</option>
        {this.state.aliens.map(aliens => {
        return <option>{aliens.type}</option>
        })}
      </select>
      <input className="action" type="text" placeholder="Action Taken"></input>
      </form>
      <a href="/encounters"><button className="report">Submit Report</button></a>
      </div>
    );
  }
}

      /*Error page*/
      const NotFound = () => <h1>404: Page Not Found</h1>;

      class App extends Component {
        render() {
          return (
      /*Make routes for the links of the pages that will appear on the page*/
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/check-in" component={CheckIn} />
          <Route path="/encounters" component={Encounters} />
          <Route path="/report" component={Report} />
          <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
