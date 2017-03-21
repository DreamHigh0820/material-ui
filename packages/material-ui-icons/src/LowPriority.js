import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

let LowPriority = (props) => (
  <SvgIcon {...props}>
    <path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/>
  </SvgIcon>
);

LowPriority = pure(LowPriority);
LowPriority.muiName = 'SvgIcon';

export default LowPriority;
