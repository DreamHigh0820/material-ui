import React from 'react';
import FontIcon from 'material-ui/lib/FontIcon';
import IconButton from 'material-ui/lib/IconButton';
import ActionHome from 'material-ui/lib/svg-icons/action/home';

const IconButtonExampleComplex = () => (
  <div>
    <IconButton tooltip="Font Icon">
      <FontIcon className="muidocs-icon-action-home" />
    </IconButton>

    <IconButton tooltip="SVG Icon">
      <ActionHome />
    </IconButton>

    <IconButton
      iconClassName="material-icons"
      tooltip="Ligature"
    >
      home
    </IconButton>
  </div>
);

export default IconButtonExampleComplex;
