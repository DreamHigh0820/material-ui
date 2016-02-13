import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let FileFolder = (props) => (
  <SvgIcon {...props}>
    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
  </SvgIcon>
);
FileFolder = pure(FileFolder)
FileFolder.displayName = 'FileFolder';

export default FileFolder;
