// @flow weak

import React, { Component } from 'react';
import Switch from 'material-ui/Switch';

export default class Switches extends Component {
  state = {
    checkedA: true,
    checkedB: false,
  };

  render() {
    return (
      <div>
        <Switch
          checked={this.state.checkedA}
          onChange={(event, checked) => this.setState({ checkedA: checked })}
          label="A"
          labelReverse
        />
        <Switch
          checked={this.state.checkedB}
          onChange={(event, checked) => this.setState({ checkedB: checked })}
          label="B"
        />
        <Switch label="C" />
      </div>
    );
  }
}

