import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let ActionAspectRatio = (props) => (
  <SvgIcon {...props}>
    <path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/>
  </SvgIcon>
);
ActionAspectRatio = pure(ActionAspectRatio)
ActionAspectRatio.displayName = 'ActionAspectRatio';

export default ActionAspectRatio;
