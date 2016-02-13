import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let ContentWeekend = (props) => (
  <SvgIcon {...props}>
    <path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"/>
  </SvgIcon>
);
ContentWeekend = pure(ContentWeekend)
ContentWeekend.displayName = 'ContentWeekend';

export default ContentWeekend;
