// @inheritedComponent ButtonBase

import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { alpha, withStyles } from '../styles';
import ButtonBase from '../ButtonBase';
import { capitalize } from '../utils';

export const styles = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    ...theme.typography.button,
    borderRadius: theme.shape.borderRadius,
    padding: 11,
    border: `1px solid ${alpha(theme.palette.action.active, 0.12)}`,
    color: alpha(theme.palette.action.active, 0.38),
    '&$selected': {
      color: theme.palette.action.active,
      backgroundColor: alpha(theme.palette.action.active, 0.12),
      '&:hover': {
        backgroundColor: alpha(theme.palette.action.active, 0.15),
      },
    },
    '&$disabled': {
      color: alpha(theme.palette.action.disabled, 0.12),
    },
    '&:hover': {
      textDecoration: 'none',
      // Reset on mouse devices
      backgroundColor: alpha(theme.palette.text.primary, 0.05),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},
  /* Pseudo-class applied to the root element if `selected={true}`. */
  selected: {},
  /* Styles applied to the `label` wrapper element. */
  label: {
    width: '100%', // Ensure the correct width for iOS Safari
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
  },
  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    padding: 7,
    fontSize: theme.typography.pxToRem(13),
  },
  /* Styles applied to the root element if `size="large"`. */
  sizeLarge: {
    padding: 15,
    fontSize: theme.typography.pxToRem(15),
  },
});

const ToggleButton = React.forwardRef(function ToggleButton(props, ref) {
  const {
    children,
    classes,
    className,
    disabled = false,
    disableFocusRipple = false,
    onChange,
    onClick,
    selected,
    size = 'medium',
    value,
    ...other
  } = props;

  const handleChange = (event) => {
    if (onClick) {
      onClick(event, value);
      if (event.isDefaultPrevented()) {
        return;
      }
    }

    if (onChange) {
      onChange(event, value);
    }
  };

  return (
    <ButtonBase
      className={clsx(
        classes.root,
        {
          [classes.disabled]: disabled,
          [classes.selected]: selected,
          [classes[`size${capitalize(size)}`]]: size !== 'medium',
        },
        className,
      )}
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      ref={ref}
      onClick={handleChange}
      onChange={onChange}
      value={value}
      aria-pressed={selected}
      {...other}
    >
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  );
});

ToggleButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusedVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * If `true`, the button is rendered in an active state.
   */
  selected: PropTypes.bool,
  /**
   * The size of the component.
   * The prop defaults to the value inherited from the parent ToggleButtonGroup component.
   * @default 'medium'
   */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  /**
   * The value to associate with the button when selected in a
   * ToggleButtonGroup.
   */
  value: PropTypes.any.isRequired,
};

export default withStyles(styles, { name: 'MuiToggleButton' })(ToggleButton);
