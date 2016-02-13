import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let ImageBrokenImage = (props) => (
  <SvgIcon {...props}>
    <path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"/>
  </SvgIcon>
);
ImageBrokenImage = pure(ImageBrokenImage)
ImageBrokenImage.displayName = 'ImageBrokenImage';

export default ImageBrokenImage;
