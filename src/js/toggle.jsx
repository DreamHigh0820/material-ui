var React = require('react');
var Classable = require('./mixins/classable.js');
var Paper = require('./paper.jsx');
var EnhancedSwitch = require('./enhanced-switch.jsx');

var Toggle = React.createClass({

  mixins: [Classable],

  propTypes: {
    onToggle: React.PropTypes.func,
    defaultToggled: React.PropTypes.bool,
    labelPosition: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      switched: this.props.defaultToggled || false
    }
  },

  render: function() {
    var {
      onToggle,
      ...other
    } = this.props;
    
    var classes = this.getClasses("mui-switch-toggle", {
      'mui-is-switched': this.state.switched,
      'mui-is-disabled': this.props.disabled,
      'mui-is-required': this.props.required
    });

    var toggleDiv = (
      <div className="mui-switch">
        <div className={classes}>
          <div className="mui-toggle-track" />
          <Paper className="mui-toggle-thumb" zDepth={1} />
        </div>
      </div>
    );

    var labelDiv = (
      <div className="mui-switch-label">
        {this.props.label}
      </div>
    );

    var labelPositionExist = this.props.labelPosition;

    // Position is left if not defined or invalid.
    var divsInOrder = (labelPositionExist && (this.props.labelPosition.toUpperCase() === "RIGHT")) ? (
        <div>
          {toggleDiv}
          {labelDiv}
        </div>
      ) : (
        <div>
          {labelDiv}
          {toggleDiv}
        </div>
    );

    return (
      <div className="mui-switch-wrap">

        <EnhancedSwitch 
          {...other} 
          ref="enhancedSwitch"
          switchType="toggle"
          className="mui-switch-toggle"
          onSwitch={this._onToggle}
          defaultChecked={this.props.defaultToggled} />

        {divsInOrder}

      </div>
    );
  },

  _onToggle: function(e, isInputChecked) {
    this.setState({switched: !this.refs.enhancedSwitch.state.switched});
    if (this.props.onToggle) this.props.onToggle(e, isInputChecked);
  },

  isToggled: function() {
    return this.refs.enhancedSwitch.isSwitched();
  },

  setToggled: function(newToggledValue) {
    this.refs.enhancedSwitch.setSwitched(newToggledValue);
  }

});

module.exports = Toggle;
