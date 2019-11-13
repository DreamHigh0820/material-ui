import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { elementAcceptingRef } from '@material-ui/utils';
import { fade } from '../styles/colorManipulator';
import withStyles from '../styles/withStyles';
import capitalize from '../utils/capitalize';
import Grow from '../Grow';
import Popper from '../Popper';
import useForkRef from '../utils/useForkRef';
import setRef from '../utils/setRef';
import { useIsFocusVisible } from '../utils/focusVisible';
import useTheme from '../styles/useTheme';

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

function arrowGenerator() {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '2em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: 'transparent transparent currentcolor transparent',
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '2em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: 'currentcolor transparent transparent transparent',
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '2em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: 'transparent currentcolor transparent transparent',
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '2em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: 'transparent transparent transparent currentcolor',
      },
    },
  };
}

export const styles = theme => ({
  /* Styles applied to the Popper component. */
  popper: {
    zIndex: theme.zIndex.tooltip,
    pointerEvents: 'none',
    flip: false, // disable jss-rtl plugin
  },
  /* Styles applied to the Popper component if `interactive={true}`. */
  popperInteractive: {
    pointerEvents: 'auto',
  },
  /* Styles applied to the Popper component if `arrow={true}`. */
  popperArrow: arrowGenerator(),
  /* Styles applied to the tooltip (label wrapper) element. */
  tooltip: {
    backgroundColor: fade(theme.palette.grey[700], 0.9),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.common.white,
    fontFamily: theme.typography.fontFamily,
    padding: '4px 8px',
    fontSize: theme.typography.pxToRem(10),
    lineHeight: `${round(14 / 10)}em`,
    maxWidth: 300,
    wordWrap: 'break-word',
    fontWeight: theme.typography.fontWeightMedium,
  },
  /* Styles applied to the tooltip (label wrapper) element if `arrow={true}`. */
  tooltipArrow: {
    position: 'relative',
    margin: '0',
  },
  /* Styles applied to the arrow element. */
  arrow: {
    position: 'absolute',
    fontSize: 6,
    color: fade(theme.palette.grey[700], 0.9),
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  /* Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
  touch: {
    padding: '8px 16px',
    fontSize: theme.typography.pxToRem(14),
    lineHeight: `${round(16 / 14)}em`,
    fontWeight: theme.typography.fontWeightRegular,
  },
  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
  tooltipPlacementLeft: {
    transformOrigin: 'right center',
    margin: '0 24px ',
    [theme.breakpoints.up('sm')]: {
      margin: '0 14px',
    },
  },
  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
  tooltipPlacementRight: {
    transformOrigin: 'left center',
    margin: '0 24px',
    [theme.breakpoints.up('sm')]: {
      margin: '0 14px',
    },
  },
  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
  tooltipPlacementTop: {
    transformOrigin: 'center bottom',
    margin: '24px 0',
    [theme.breakpoints.up('sm')]: {
      margin: '14px 0',
    },
  },
  /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
  tooltipPlacementBottom: {
    transformOrigin: 'center top',
    margin: '24px 0',
    [theme.breakpoints.up('sm')]: {
      margin: '14px 0',
    },
  },
});

const Tooltip = React.forwardRef(function Tooltip(props, ref) {
  const {
    arrow = false,
    children,
    classes,
    disableFocusListener = false,
    disableHoverListener = false,
    disableTouchListener = false,
    enterDelay = 0,
    enterTouchDelay = 700,
    id,
    interactive = false,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = 'bottom',
    PopperProps,
    title,
    TransitionComponent = Grow,
    TransitionProps,
    ...other
  } = props;
  const theme = useTheme();

  const [, forceUpdate] = React.useState(0);
  const [childNode, setChildNode] = React.useState();
  const [arrowRef, setArrowRef] = React.useState(null);
  const ignoreNonTouchEvents = React.useRef(false);
  const defaultId = React.useRef();
  const closeTimer = React.useRef();
  const enterTimer = React.useRef();
  const leaveTimer = React.useRef();
  const touchTimer = React.useRef();

  const { current: isControlled } = React.useRef(openProp != null);
  const [openState, setOpenState] = React.useState(false);
  let open = isControlled ? openProp : openState;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (isControlled !== (openProp != null)) {
        console.error(
          [
            `Material-UI: A component is changing ${
              isControlled ? 'a ' : 'an un'
            }controlled Tooltip to be ${isControlled ? 'un' : ''}controlled.`,
            'Elements should not switch from uncontrolled to controlled (or vice versa).',
            'Decide between using a controlled or uncontrolled Tooltip ' +
              'element for the lifetime of the component.',
            'More info: https://fb.me/react-controlled-components',
          ].join('\n'),
        );
      }
    }, [openProp, isControlled]);
  }

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (
        childNode &&
        childNode.disabled &&
        !isControlled &&
        title !== '' &&
        childNode.tagName.toLowerCase() === 'button'
      ) {
        console.error(
          [
            'Material-UI: you are providing a disabled `button` child to the Tooltip component.',
            'A disabled element does not fire events.',
            "Tooltip needs to listen to the child element's events to display the title.",
            '',
            'Add a simple wrapper element, such as a `span`.',
          ].join('\n'),
        );
      }
    }, [isControlled, title, childNode]);
  }

  React.useEffect(() => {
    // Fallback to this default id when possible.
    // Use the random value for client-side rendering only.
    // We can't use it server-side.
    if (!defaultId.current) {
      defaultId.current = `mui-tooltip-${Math.round(Math.random() * 1e5)}`;
    }

    // Rerender with defaultId and childNode.
    if (openProp) {
      forceUpdate(n => !n);
    }
  }, [openProp]);

  React.useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(touchTimer.current);
    };
  }, []);

  const handleOpen = event => {
    // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
    if (!isControlled) {
      setOpenState(true);
    }

    if (onOpen) {
      onOpen(event);
    }
  };

  const handleEnter = event => {
    const childrenProps = children.props;

    if (event.type === 'mouseover' && childrenProps.onMouseOver) {
      childrenProps.onMouseOver(event);
    }

    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    }

    // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).
    if (childNode) {
      childNode.removeAttribute('title');
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    if (enterDelay) {
      event.persist();
      enterTimer.current = setTimeout(() => {
        handleOpen(event);
      }, enterDelay);
    } else {
      handleOpen(event);
    }
  };

  const { isFocusVisible, onBlurVisible, ref: focusVisibleRef } = useIsFocusVisible();
  const [childIsFocusVisible, setChildIsFocusVisible] = React.useState(false);
  const handleBlur = () => {
    if (childIsFocusVisible) {
      setChildIsFocusVisible(false);
      onBlurVisible();
    }
  };

  const handleFocus = event => {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode) {
      setChildNode(event.currentTarget);
    }

    if (isFocusVisible(event)) {
      setChildIsFocusVisible(true);
      handleEnter(event);
    }

    const childrenProps = children.props;
    if (childrenProps.onFocus) {
      childrenProps.onFocus(event);
    }
  };

  const handleClose = event => {
    if (!isControlled) {
      setOpenState(false);
    }

    if (onClose) {
      onClose(event);
    }

    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  };

  const handleLeave = event => {
    const childrenProps = children.props;

    if (event.type === 'blur') {
      if (childrenProps.onBlur) {
        childrenProps.onBlur(event);
      }
      handleBlur(event);
    }

    if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
      childrenProps.onMouseLeave(event);
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  };

  const handleTouchStart = event => {
    ignoreNonTouchEvents.current = true;
    const childrenProps = children.props;

    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }

    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    clearTimeout(touchTimer.current);
    event.persist();
    touchTimer.current = setTimeout(() => {
      handleEnter(event);
    }, enterTouchDelay);
  };

  const handleTouchEnd = event => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }

    clearTimeout(touchTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveTouchDelay);
  };

  const handleUseRef = useForkRef(setChildNode, ref);
  const handleFocusRef = useForkRef(focusVisibleRef, handleUseRef);
  // can be removed once we drop support for non ref forwarding class components
  const handleOwnRef = React.useCallback(
    instance => {
      // #StrictMode ready
      setRef(handleFocusRef, ReactDOM.findDOMNode(instance));
    },
    [handleFocusRef],
  );
  const handleRef = useForkRef(children.ref, handleOwnRef);

  // There is no point in displaying an empty tooltip.
  if (title === '') {
    open = false;
  }

  // For accessibility and SEO concerns, we render the title to the DOM node when
  // the tooltip is hidden. However, we have made a tradeoff when
  // `disableHoverListener` is set. This title logic is disabled.
  // It's allowing us to keep the implementation size minimal.
  // We are open to change the tradeoff.
  const shouldShowNativeTitle = !open && !disableHoverListener;
  const childrenProps = {
    'aria-describedby': open ? id || defaultId.current : null,
    title: shouldShowNativeTitle && typeof title === 'string' ? title : null,
    ...other,
    ...children.props,
    className: clsx(other.className, children.props.className),
  };

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = handleEnter;
    childrenProps.onMouseLeave = handleLeave;
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = handleFocus;
    childrenProps.onBlur = handleLeave;
  }

  const interactiveWrapperListeners = interactive
    ? {
        onMouseOver: childrenProps.onMouseOver,
        onMouseLeave: childrenProps.onMouseLeave,
        onFocus: childrenProps.onFocus,
        onBlur: childrenProps.onBlur,
      }
    : {};

  if (process.env.NODE_ENV !== 'production') {
    if (children.props.title) {
      console.error(
        [
          'Material-UI: you have provided a `title` prop to the child of <Tooltip />.',
          `Remove this title prop \`${children.props.title}\` or the Tooltip component.`,
        ].join('\n'),
      );
    }
  }

  return (
    <React.Fragment>
      {React.cloneElement(children, { ref: handleRef, ...childrenProps })}
      <Popper
        className={clsx(classes.popper, {
          [classes.popperInteractive]: interactive,
          [classes.popperArrow]: arrow,
        })}
        placement={placement}
        anchorEl={childNode}
        open={childNode ? open : false}
        id={childrenProps['aria-describedby']}
        transition
        popperOptions={{
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        }}
        {...interactiveWrapperListeners}
        {...PopperProps}
      >
        {({ placement: placementInner, TransitionProps: TransitionPropsInner }) => (
          <TransitionComponent
            timeout={theme.transitions.duration.shorter}
            {...TransitionPropsInner}
            {...TransitionProps}
          >
            <div
              className={clsx(
                classes.tooltip,
                {
                  [classes.touch]: ignoreNonTouchEvents.current,
                  [classes.tooltipArrow]: arrow,
                },
                classes[`tooltipPlacement${capitalize(placementInner.split('-')[0])}`],
              )}
            >
              {title}
              {arrow ? <span className={classes.arrow} ref={setArrowRef} /> : null}
            </div>
          </TransitionComponent>
        )}
      </Popper>
    </React.Fragment>
  );
});

Tooltip.propTypes = {
  /**
   * If `true`, adds an arrow to the tooltip.
   */
  arrow: PropTypes.bool,
  /**
   * Tooltip reference element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Do not respond to focus events.
   */
  disableFocusListener: PropTypes.bool,
  /**
   * Do not respond to hover events.
   */
  disableHoverListener: PropTypes.bool,
  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: PropTypes.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: PropTypes.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: PropTypes.number,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: PropTypes.string,
  /**
   * Makes a tooltip interactive, i.e. will not close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   */
  interactive: PropTypes.bool,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: PropTypes.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: PropTypes.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: PropTypes.func,
  /**
   * If `true`, the tooltip is shown.
   */
  open: PropTypes.bool,
  /**
   * Tooltip placement.
   */
  placement: PropTypes.oneOf([
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top',
  ]),
  /**
   * Props applied to the [`Popper`](/api/popper/) element.
   */
  PopperProps: PropTypes.object,
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: PropTypes.node.isRequired,
  /**
   * The component used for the transition.
   */
  TransitionComponent: PropTypes.elementType,
  /**
   * Props applied to the `Transition` element.
   */
  TransitionProps: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiTooltip' })(Tooltip);
