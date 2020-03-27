import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TOKEN_KEY } from './constants';

import Greeting from './Greeting';
import Login from './Login';
import Dashboard from './Dashboard';
import { Button } from 'semantic-ui-react';

const initialState = {
  token: undefined
};

class App extends Component {
  state = initialState;

  login = (token) => {
    this.setState({ token });
  }

  logout = () => {
    this.setState({ ...initialState }, () => localStorage.removeItem(TOKEN_KEY));
  }

  componentWillMount = () => {
    const token = localStorage.getItem(TOKEN_KEY) || undefined;
    this.setState({ token });
  }

  render() {
    const { token } = this.state;

    return (
      <div className="App">
        {token ? <Dashboard/> : <Login onLogin={this.login}/>}
        {token ? <Button onClick={this.logout}>Logout</Button> : ''}
      </div>
    );
  }
}

export default App;
