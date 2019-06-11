import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link, LinkProps } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Omit } from '@material-ui/types';

// required for react-router-dom < 6.0.0
// see https://github.com/ReactTraining/react-router/issues/6056#issuecomment-435524678
const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref as any} {...props} />
));

const CollisionLink = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'innerRef' | 'to'>>(
  (props, ref) => <Link innerRef={ref as any} to="/getting-started/installation/" {...props} />,
);

export default function ButtonRouter() {
  return (
    <Router>
      <Button color="primary" component={AdapterLink} to="/">
        Simple case
      </Button>
      <Button component={CollisionLink}>Avoids props collision</Button>
    </Router>
  );
}
