import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { componentPropType } from '@material-ui/utils';
import Typography from '../Typography';
import withStyles from '../styles/withStyles';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em', // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center',
  },
  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    '&$positionStart': {
      marginTop: 16,
    },
  },
  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8,
  },
  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8,
  },
  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: 'none',
  },
};

function InputAdornment(props) {
  const {
    children,
    component: Component,
    classes,
    className,
    disablePointerEvents,
    disableTypography,
    position,
    variant,
    ...other
  } = props;

  return (
    <Component
      className={classNames(
        classes.root,
        {
          [classes.filled]: variant === 'filled',
          [classes.positionStart]: position === 'start',
          [classes.positionEnd]: position === 'end',
          [classes.disablePointerEvents]: disablePointerEvents,
        },
        className,
      )}
      {...other}
    >
      {typeof children === 'string' && !disableTypography ? (
        <Typography color="textSecondary">{children}</Typography>
      ) : (
        children
      )}
    </Component>
  );
}

InputAdornment.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: componentPropType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the input on click.
   */
  disablePointerEvents: PropTypes.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: PropTypes.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: PropTypes.oneOf(['start', 'end']),
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

InputAdornment.defaultProps = {
  component: 'div',
  disablePointerEvents: false,
  disableTypography: false,
};

export default withStyles(styles, { name: 'MuiInputAdornment' })(InputAdornment);
