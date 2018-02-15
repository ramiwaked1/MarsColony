import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

export default class App extends Component {
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
        console.log(aliens);
      });
  }

  render() {
    return (
      <div>
        {this.state.aliens.map(aliens => {
        return <Aliens type={aliens.type} />
        })}
      </div>
    );
  }
}

const Aliens = ({type}) => {
  return <div><a href={type}>{type}</a></div>
}


render(<App />, document.getElementById('root'));
