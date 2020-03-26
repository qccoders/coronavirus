import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../config';

const initialState = {
  greeting: '',
};

class Greeting extends Component {
  state = initialState;

  componentWillMount() {
    axios.get(`${baseUrl}/greeting`)
      .then(response => response.data)
      .then(greeting => this.setState({ greeting }));
  }

  render() {
    const { greeting } = this.state;

    return (
      <h1>{greeting}</h1>
    );
  }
}

export default Greeting;