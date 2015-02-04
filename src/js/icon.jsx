var React = require('react'),
  Classable = require('./mixins/classable.js');

var Icon = React.createClass({

  mixins: [Classable],

  propTypes: {
    icon: React.PropTypes.string
  },

  componentDidMount: function() {
    console.warn('Icon has been deprecated. Please use FontIcon instead. ' +
      'See http://material-ui.com/#/components/font-icons');
  },

  render: function() {
    var { className, icon, ...other } = this.props,
      isMuiCustomIcon = icon.indexOf('mui-icon') > -1,
      mdfiClassName = 'mdfi_' + icon.replace(/-/g, '_'),
      iconClassName = isMuiCustomIcon ? icon : mdfiClassName,
      classes = this.getClasses('mui-icon ' + iconClassName);

    return (
      <span {...other} className={classes} />
    );
  }

});

module.exports = Icon;