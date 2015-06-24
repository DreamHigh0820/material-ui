let React = require('react');
let SvgIcon = require('../../svg-icon');

let ImageLooks4 = React.createClass({

  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z"/>
      </SvgIcon>
    );
  }

});

module.exports = ImageLooks4;