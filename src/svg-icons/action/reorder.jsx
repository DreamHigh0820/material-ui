let React = require('react');
let SvgIcon = require('../../svg-icon');

let ActionReorder = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>
      </SvgIcon>
    );
  }

});

module.exports = ActionReorder;