import React from 'react';
import SvgIcon from '../../SvgIcon';

/**
 * @ignore - internal component.
 */
let ArrowDropDown = props => (
  <SvgIcon {...props}>
    <path d="M7 10l5 5 5-5z" />
  </SvgIcon>
);

ArrowDropDown = React.memo(ArrowDropDown);
ArrowDropDown.muiName = 'SvgIcon';

export default ArrowDropDown;
