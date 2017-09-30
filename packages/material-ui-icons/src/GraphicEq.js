import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

const SvgIconCustom = global.__MUI_SvgIcon__ || SvgIcon;

let GraphicEq = props =>
  <SvgIconCustom {...props}>
    <path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z" />
  </SvgIconCustom>;

GraphicEq = pure(GraphicEq);
GraphicEq.muiName = 'SvgIcon';

export default GraphicEq;
