import { Omit } from '@material-ui/core';
import * as React from 'react';
import { MaterialUiPickersDate } from '../typings/date';
import { Utils } from '../typings/utils';
import { MuiPickersContextConsumer } from '../utils/MuiPickersUtilsProvider';

export interface WithUtilsProps {
  utils: Utils<MaterialUiPickersDate>;
}

const checkUtils = (utils: Utils<MaterialUiPickersDate> | null | undefined) => {
  if (!utils) {
    // tslint:disable-next-line
    throw new Error(
      'Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.'
    );
  }
};

const WithUtils = () => <P extends WithUtilsProps>(
  Component: React.ComponentType<P>
) => {
  const withUtils: React.SFC<Omit<P, keyof WithUtilsProps>> = props => (
    <MuiPickersContextConsumer>
      {utils => {
        checkUtils(utils);
        return <Component utils={utils} {...props} />;
      }}
    </MuiPickersContextConsumer>
  );

  withUtils.displayName = `WithUtils(${Component.displayName ||
    Component.name})`;

  return withUtils;
};

export default WithUtils;
