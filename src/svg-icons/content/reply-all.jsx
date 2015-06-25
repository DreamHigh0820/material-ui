let React = require('react');
let SvgIcon = require('../../svg-icon');

let ContentReplyAll = React.createClass({

  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
      </SvgIcon>
    );
  }

});

module.exports = ContentReplyAll;