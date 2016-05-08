import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let AvVideoLabel = (props) => (
  <SvgIcon {...props}>
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"/>
  </SvgIcon>
);
AvVideoLabel = pure(AvVideoLabel);
AvVideoLabel.displayName = 'AvVideoLabel';
AvVideoLabel.muiName = 'SvgIcon';

export default AvVideoLabel;
