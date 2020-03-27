import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from 'axios';
import { baseUrl } from '../config';

const initialState = {
  email: ''
};

class Login extends Component {
  state = initialState;

  handleChange = (e, { value }) => {
    this.setState({ email: value }, () => console.log(this.state));
  }

  handleSubmit = () => {
    axios.post(`${baseUrl}/login`, { id: this.state.email })
      .then(response => response.data)
      .then(token => {
        localStorage.setItem('coronavirus-token', token)
        console.log('logged in', token);
      });
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in
          </Header>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.handleChange} />
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login