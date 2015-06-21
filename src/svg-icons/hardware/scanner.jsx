let React = require('react');
let SvgIcon = require('../../svg-icon');

let HardwareScanner = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z"/>
      </SvgIcon>
    );
  }

});

module.exports = HardwareScanner;