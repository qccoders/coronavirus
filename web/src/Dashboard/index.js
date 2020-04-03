import React, { Component } from 'react'
import {
  Button
} from 'semantic-ui-react';

import Approval from '../Approval';

const initialState = {
  step: 0,
  rejected: false,
  approved: false,
  code: undefined
};

const steps = [
  'Do you have a fever?',
  'Do you have a cough?',
  'Are you experiencing shortness of breath?'
];

class Dashboard extends Component {
  state = initialState;

  getCode = () => {
    return 1
  }

  handleYes = () => {
    const { step } = this.state;

    if (step === steps.length - 1) {
      this.setState({ approved: true, code: this.getCode() }, () => {

      });
    } else {
      this.setState({ step: step + 1 });
    }
  }

  handleNo = () => {
    this.setState({ rejected: true });
  }

  renderRejected = () => {
    return (
      <div>You don't qualify for a test at this time.</div>
    );
  };

  render() {
    const { rejected, approved, code } = this.state;

    return (
      <div>
        <h1>Coronavirus Screening</h1>
        {rejected ? this.renderRejected() :
          approved ? <Approval code={code}/> :
            <div>
              <h2>{steps[this.state.step]}</h2>
              <Button onClick={this.handleYes}>Yes</Button><Button onClick={this.handleNo}>No</Button>
            </div>
        }
      </div>
    );
  }
}

export default Dashboard