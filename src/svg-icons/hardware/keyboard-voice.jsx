import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let HardwareKeyboardVoice = (props) => (
  <SvgIcon {...props}>
    <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
  </SvgIcon>
);
HardwareKeyboardVoice = pure(HardwareKeyboardVoice)
HardwareKeyboardVoice.displayName = 'HardwareKeyboardVoice';

export default HardwareKeyboardVoice;
