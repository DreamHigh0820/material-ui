import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let DeviceBatteryCharging50 = (props) => (
  <SvgIcon {...props}>
    <path d="M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z"/><path fillOpacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z"/>
  </SvgIcon>
);
DeviceBatteryCharging50 = pure(DeviceBatteryCharging50)
DeviceBatteryCharging50.displayName = 'DeviceBatteryCharging50';

export default DeviceBatteryCharging50;
