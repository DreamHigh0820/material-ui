const React = require('react/addons');
const PureRenderMixin = React.addons.PureRenderMixin;
const SvgIcon = require('../../svg-icon');

const FileCloudDone = React.createClass({

  mixins: [PureRenderMixin],

  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"/>
      </SvgIcon>
    );
  }

});

module.exports = FileCloudDone;
