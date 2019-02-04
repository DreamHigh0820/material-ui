/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// @inheritedComponent Modal

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import Modal from '../Modal';
import Fade from '../Fade';
import { duration } from '../styles/transitions';
import Paper from '../Paper';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {},
  /* Styles applied to the root element if `scroll="paper"`. */
  scrollPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /* Styles applied to the root element if `scroll="body"`. */
  scrollBody: {
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  /* Styles applied to the container element. */
  container: {
    height: '100%',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
  },
  /* Styles applied to the `Paper` component. */
  paper: {
    display: 'flex',
    flexDirection: 'column',
    margin: 48,
    position: 'relative',
    overflowY: 'auto', // Fix IE 11 issue, to remove at some point.
  },
  /* Styles applied to the `Paper` component if `scroll="paper"`. */
  paperScrollPaper: {
    flex: '0 1 auto',
    maxHeight: 'calc(100% - 96px)',
  },
  /* Styles applied to the `Paper` component if `scroll="body"`. */
  paperScrollBody: {
    margin: '48px auto',
  },
  /* Styles applied to the `Paper` component if `maxWidth=false`. */
  paperWidthFalse: {
    '&$paperScrollBody': {
      margin: 48,
    },
  },
  /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
  paperWidthXs: {
    maxWidth: Math.max(theme.breakpoints.values.xs, 360),
    '&$paperScrollBody': {
      [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 360) + 48 * 2)]: {
        margin: 48,
      },
    },
  },
  /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
  paperWidthSm: {
    maxWidth: theme.breakpoints.values.sm,
    '&$paperScrollBody': {
      [theme.breakpoints.down(theme.breakpoints.values.sm + 48 * 2)]: {
        margin: 48,
      },
    },
  },
  /* Styles applied to the `Paper` component if `maxWidth="md"`. */
  paperWidthMd: {
    maxWidth: theme.breakpoints.values.md,
    '&$paperScrollBody': {
      [theme.breakpoints.down(theme.breakpoints.values.md + 48 * 2)]: {
        margin: 48,
      },
    },
  },
  /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
  paperWidthLg: {
    maxWidth: theme.breakpoints.values.lg,
    '&$paperScrollBody': {
      [theme.breakpoints.down(theme.breakpoints.values.lg + 48 * 2)]: {
        margin: 48,
      },
    },
  },
  /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
  paperWidthXl: {
    maxWidth: theme.breakpoints.values.xl,
    '&$paperScrollBody': {
      [theme.breakpoints.down(theme.breakpoints.values.xl + 48 * 2)]: {
        margin: 48,
      },
    },
  },
  /* Styles applied to the `Paper` component if `fullWidth={true}`. */
  paperFullWidth: {
    width: '100%',
    '&$paperScrollBody': {
      width: 'initial',
    },
  },
  /* Styles applied to the `Paper` component if `fullScreen={true}`. */
  paperFullScreen: {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: 'none',
    borderRadius: 0,
    '&$paperScrollBody': {
      margin: 0,
    },
  },
});

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */
class Dialog extends React.Component {
  handleMouseDown = event => {
    this.mouseDownTarget = event.target;
  };

  handleBackdropClick = event => {
    // Ignore the events not coming from the "backdrop"
    // We don't want to close the dialog when clicking the dialog content.
    if (event.target !== event.currentTarget) {
      return;
    }

    // Make sure the event starts and ends on the same DOM element.
    if (event.target !== this.mouseDownTarget) {
      return;
    }

    this.mouseDownTarget = null;

    if (this.props.onBackdropClick) {
      this.props.onBackdropClick(event);
    }

    if (!this.props.disableBackdropClick && this.props.onClose) {
      this.props.onClose(event, 'backdropClick');
    }
  };

  render() {
    const {
      BackdropProps,
      children,
      classes,
      className,
      disableBackdropClick,
      disableEscapeKeyDown,
      fullScreen,
      fullWidth,
      maxWidth,
      onBackdropClick,
      onClose,
      onEnter,
      onEntered,
      onEntering,
      onEscapeKeyDown,
      onExit,
      onExited,
      onExiting,
      open,
      PaperComponent,
      PaperProps = {},
      scroll,
      TransitionComponent,
      transitionDuration,
      TransitionProps,
      ...other
    } = this.props;

    return (
      <Modal
        className={classNames(classes.root, className)}
        BackdropProps={{
          transitionDuration,
          ...BackdropProps,
        }}
        closeAfterTransition
        disableBackdropClick={disableBackdropClick}
        disableEscapeKeyDown={disableEscapeKeyDown}
        onBackdropClick={onBackdropClick}
        onEscapeKeyDown={onEscapeKeyDown}
        onClose={onClose}
        open={open}
        role="dialog"
        {...other}
      >
        <TransitionComponent
          appear
          in={open}
          timeout={transitionDuration}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
          onExiting={onExiting}
          onExited={onExited}
          {...TransitionProps}
        >
          <div
            className={classNames(classes.container, classes[`scroll${capitalize(scroll)}`])}
            onClick={this.handleBackdropClick}
            onMouseDown={this.handleMouseDown}
            role="document"
          >
            <PaperComponent
              elevation={24}
              {...PaperProps}
              className={classNames(
                classes.paper,
                classes[`paperScroll${capitalize(scroll)}`],
                classes[`paperWidth${capitalize(String(maxWidth))}`],
                {
                  [classes.paperFullScreen]: fullScreen,
                  [classes.paperFullWidth]: fullWidth,
                },
                PaperProps.className,
              )}
            >
              {children}
            </PaperComponent>
          </div>
        </TransitionComponent>
      </Modal>
    );
  }
}

Dialog.propTypes = {
  /**
   * @ignore
   */
  BackdropProps: PropTypes.object,
  /**
   * Dialog children, usually the included sub-components.
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
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick: PropTypes.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: PropTypes.bool,
  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: PropTypes.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   */
  fullWidth: PropTypes.bool,
  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: PropTypes.func,
  /**
   * Callback fired before the dialog enters.
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired when the escape key is pressed,
   * `disableKeyboard` is false and the modal is in focus.
   */
  onEscapeKeyDown: PropTypes.func,
  /**
   * Callback fired before the dialog exits.
   */
  onExit: PropTypes.func,
  /**
   * Callback fired when the dialog has exited.
   */
  onExited: PropTypes.func,
  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: PropTypes.func,
  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   */
  PaperComponent: componentPropType,
  /**
   * Properties applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: PropTypes.object,
  /**
   * Determine the container for scrolling the dialog.
   */
  scroll: PropTypes.oneOf(['body', 'paper']),
  /**
   * The component used for the transition.
   */
  TransitionComponent: componentPropType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  ]),
  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: PropTypes.object,
};

Dialog.defaultProps = {
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  fullScreen: false,
  fullWidth: false,
  maxWidth: 'sm',
  PaperComponent: Paper,
  scroll: 'paper',
  TransitionComponent: Fade,
  transitionDuration: { enter: duration.enteringScreen, exit: duration.leavingScreen },
};

export default withStyles(styles, { name: 'MuiDialog' })(Dialog);
