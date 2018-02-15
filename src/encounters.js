import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

export default class App extends Component {
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
          encounters: encounters.date
        });
        console.log(encounters);
      });
  }

  render() {
    return (
      <div>
        {this.state.encounters.map(encounters => {
        return <Encounters date={encounters.date} />
        })}
      </div>
    );
  }
}

const Encounters = ({date}) => {
  return <div><a href={date}>{date}</a></div>
}


render(<App />, document.getElementById('root'));
