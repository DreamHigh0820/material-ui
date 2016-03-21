import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let ImageFilterFrames = (props) => (
  <SvgIcon {...props}>
    <path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"/>
  </SvgIcon>
);
ImageFilterFrames = pure(ImageFilterFrames)
ImageFilterFrames.displayName = 'ImageFilterFrames';

export default ImageFilterFrames;
