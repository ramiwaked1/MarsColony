import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

export default class App extends Component {
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
        console.log(jobs);
      });
  }

  render() {
    return (
      <div>
        {this.state.jobs.map(jobs => {
        return <Jobs name={jobs.name} />
        })}
      </div>
    );
  }
}

const Jobs = ({name}) => {
  return <div><a href={name}>{name}</a></div>
}


render(<App />, document.getElementById('root'));
