import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

let FilterNone = (props) => (
  <SvgIcon {...props}>
    <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/>
  </SvgIcon>
);

FilterNone = pure(FilterNone);
FilterNone.muiName = 'SvgIcon';

export default FilterNone;
