import React from 'react';
import IconButton from 'material-ui/lib/IconButton';
import CodeIcon from 'material-ui/lib/svg-icons/action/code';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/lib/Toolbar';

const CodeBlockTitle = (props) => (
  <Toolbar>
    <ToolbarGroup float="left">
      <ToolbarTitle text={props.title || 'Example'} />
    </ToolbarGroup>
    <ToolbarGroup float="right">
      <IconButton touch={true} tooltip={props.tooltip}>
        <CodeIcon />
      </IconButton>
    </ToolbarGroup>
  </Toolbar>
);

CodeBlockTitle.propTypes = {
  title: React.PropTypes.string,
  tooltip: React.PropTypes.string,
};

export default CodeBlockTitle;
