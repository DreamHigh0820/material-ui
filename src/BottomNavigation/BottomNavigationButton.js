// @flow weak

import React, { Component, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from '../utils/customPropTypes';
import ButtonBase from '../internal/ButtonBase';
import Icon from '../Icon';

export const styleSheet = createStyleSheet('MuiBottomNavigationButton', (theme) => {
  return {
    root: {
      transition: theme.transitions.create(['color', 'padding-top'], {
        duration: theme.transitions.duration.short,
      }),
      paddingTop: 8,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      minWidth: 80,
      maxWidth: 168,
      background: 'none',
      color: theme.palette.text.secondary,
      flex: '1',
    },
    selected: {
      paddingTop: 6,
      color: theme.palette.primary[500],
    },
    selectedIconOnly: {
      paddingTop: 16,
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize - 2,
      opacity: 1,
      transition: 'font-size 0.2s, opacity 0.2s',
      transitionDelay: '0.1s',
    },
    selectedLabel: {
      fontSize: theme.typography.fontSize,
    },
    hiddenLabel: {
      opacity: 0,
      transitionDelay: '0s',
    },
    icon: {
      display: 'block',
      margin: 'auto',
    },
  };
});

export default class BottomNavigationButton extends Component {
  static propTypes = {
    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,
    /**
     * The icon element. If a string is provided, it will be used as a font ligature.
     */
    icon: PropTypes.node,
    /**
     * @ignore
     */
    index: PropTypes.number,
    /**
     * The label element.
     */
    label: PropTypes.node,
    /**
     * @ignore
     */
    onChange: PropTypes.func,
    /**
     * @ignore
     */
    onClick: PropTypes.func,
    /**
     * @ignore
     */
    selected: PropTypes.bool,
    /**
     * If `true`, the BottomNavigationButton will show its label.
     */
    showLabel: PropTypes.bool,
  };

  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

  handleChange = (event) => {
    const { onChange, index, onClick } = this.props;

    onChange(event, index);

    if (onClick) {
      onClick(event);
    }
  };

  render() {
    const {
      label,
      icon: iconProp,
      selected,
      className: classNameProp,
      showLabel: showLabelProp,
      onChange, // eslint-disable-line no-unused-vars
      index, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;
    const classes = this.context.styleManager.render(styleSheet);

    const className = classNames(classes.root, {
      [classes.selected]: selected,
      [classes.selectedIconOnly]: !showLabelProp && !selected,
    }, classNameProp);

    const iconClassName = classNames(classes.icon,
      isValidElement(iconProp) ? iconProp.props.className : null);

    const icon = isValidElement(iconProp) ?
      cloneElement(iconProp, { className: iconClassName }) :
      <Icon>{iconProp}</Icon>;

    const labelClassName = classNames(classes.label, {
      [classes.selectedLabel]: selected,
      [classes.hiddenLabel]: !showLabelProp && !selected,
    });

    return (
      <ButtonBase
        className={className}
        focusRipple
        {...other}
        onClick={this.handleChange}
      >
        {icon}
        <span className={labelClassName}>
          {label}
        </span>
      </ButtonBase>
    );
  }
}
