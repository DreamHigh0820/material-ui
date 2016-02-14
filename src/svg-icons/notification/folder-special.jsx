import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let NotificationFolderSpecial = (props) => (
  <SvgIcon {...props}>
    <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2.06 11L15 15.28 12.06 17l.78-3.33-2.59-2.24 3.41-.29L15 8l1.34 3.14 3.41.29-2.59 2.24.78 3.33z"/>
  </SvgIcon>
);
NotificationFolderSpecial = pure(NotificationFolderSpecial)
NotificationFolderSpecial.displayName = 'NotificationFolderSpecial';

export default NotificationFolderSpecial;
