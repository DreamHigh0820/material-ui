import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let ActionSettingsCell = (props) => (
  <SvgIcon {...props}>
    <path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"/>
  </SvgIcon>
);
ActionSettingsCell = pure(ActionSettingsCell)
ActionSettingsCell.displayName = 'ActionSettingsCell';

export default ActionSettingsCell;
