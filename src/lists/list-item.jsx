const React = require('react/addons');
const PureRenderMixin = React.addons.PureRenderMixin;
const ColorManipulator = require('../utils/color-manipulator');
const StylePropable = require('../mixins/style-propable');
const Colors = require('../styles/colors');
const Transitions = require('../styles/transitions');
const Typography = require('../styles/typography');
const EnhancedButton = require('../enhanced-button');
const IconButton = require('../icon-button');
const OpenIcon = require('../svg-icons/navigation/arrow-drop-up');
const CloseIcon = require('../svg-icons/navigation/arrow-drop-down');
const ListNested = require('./list-nested');


const ListItem = React.createClass({

  mixins: [PureRenderMixin, StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  propTypes: {
    autoGenerateNestedIndicator: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    disableKeyboardFocus: React.PropTypes.bool,
    innerDivStyle: React.PropTypes.object,
    insetChildren: React.PropTypes.bool,
    innerStyle: React.PropTypes.object,
    leftAvatar: React.PropTypes.element,
    leftCheckbox: React.PropTypes.element,
    leftIcon: React.PropTypes.element,
    nestedLevel: React.PropTypes.number,
    onKeyboardFocus: React.PropTypes.func,
    onMouseEnter: React.PropTypes.func,
    onMouseLeave: React.PropTypes.func,
    onNestedListToggle: React.PropTypes.func,
    onTouchStart: React.PropTypes.func,
    open: React.PropTypes.bool,
    rightAvatar: React.PropTypes.element,
    rightIcon: React.PropTypes.element,
    rightIconButton: React.PropTypes.element,
    rightToggle: React.PropTypes.element,
    primaryText: React.PropTypes.node,
    secondaryText: React.PropTypes.node,
    secondaryTextLines: React.PropTypes.oneOf([1, 2]),
  },

  getDefaultProps() {
    return {
      autoGenerateNestedIndicator: true,
      nestedLevel: 0,
      onKeyboardFocus: () => {},
      onMouseEnter: () => {},
      onMouseLeave: () => {},
      onNestedListToggle: () => {},
      onTouchStart: () => {},
      open: false,
      secondaryTextLines: 1,
    };
  },

  getInitialState() {
    return {
      hovered: false,
      isKeyboardFocused: false,
      open: this.props.open,
      rightIconButtonHovered: false,
      rightIconButtonKeyboardFocused: false,
      touch: false,
    };
  },

  render() {
    const {
      autoGenerateNestedIndicator,
      children,
      disabled,
      disableKeyboardFocus,
      innerDivStyle,
      insetChildren,
      leftAvatar,
      leftCheckbox,
      leftIcon,
      nestedLevel,
      onKeyboardFocus,
      onMouseLeave,
      onMouseEnter,
      onTouchStart,
      rightAvatar,
      rightIcon,
      rightIconButton,
      rightToggle,
      primaryText,
      secondaryText,
      secondaryTextLines,
      style,
      ...other,
    } = this.props;

    const textColor = this.context.muiTheme.palette.textColor;
    const hoverColor = ColorManipulator.fade(textColor, 0.1);
    const singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
    const singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
    const twoLine = secondaryText && secondaryTextLines === 1;
    const threeLine = secondaryText && secondaryTextLines > 1;
    const hasCheckbox = leftCheckbox || rightToggle;

    const styles = {
      root: {
        backgroundColor: (this.state.isKeyboardFocused || this.state.hovered) &&
          !this.state.rightIconButtonHovered &&
          !this.state.rightIconButtonKeyboardFocused ? hoverColor : null,
        color: textColor,
        display: 'block',
        fontSize: 16,
        lineHeight: '16px',
        position: 'relative',
        transition: Transitions.easeOut(),
      },

      //This inner div is needed so that ripples will span the entire container
      innerDiv: {
        marginLeft: nestedLevel * this.context.muiTheme.component.listItem.nestedLevelDepth,
        paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
        paddingRight: rightIcon || rightAvatar || rightIconButton ? 56 : rightToggle ? 72 : 16,
        paddingBottom: singleAvatar ? 20 : 16,
        paddingTop: singleNoAvatar || threeLine ? 16 : 20,
        position: 'relative',
      },

      icons: {
        height: 24,
        width: 24,
        display: 'block',
        position: 'absolute',
        top: twoLine ? 12 : singleAvatar ? 4 : 0,
        padding: 12,
      },

      leftIcon: {
        color: Colors.grey600,
        fill: Colors.grey600,
        left: 4,
      },

      rightIcon: {
        color: Colors.grey400,
        fill: Colors.grey400,
        right: 4,
      },

      avatars: {
        position: 'absolute',
        top: singleAvatar ? 8 : 16,
      },

      label: {
        cursor: 'pointer',
      },

      leftAvatar: {
        left: 16,
      },

      rightAvatar: {
        right: 16,
      },

      leftCheckbox: {
        position: 'absolute',
        display: 'block',
        width: 24,
        top: twoLine ? 24 : singleAvatar ? 16 : 12,
        left: 16,
      },

      primaryText: {
        margin: 0,
      },

      rightIconButton: {
        position: 'absolute',
        display: 'block',
        top: twoLine ? 12 : singleAvatar ? 4 : 0,
        right: 4,
      },

      rightToggle: {
        position: 'absolute',
        display: 'block',
        width: 54,
        top: twoLine ? 25 : singleAvatar ? 17 : 13,
        right: 8,
      },

      secondaryText: {
        fontSize: 14,
        lineHeight: threeLine ? '18px' : '16px',
        height: threeLine ? 36 : 16,
        margin: 0,
        marginTop: 4,
        color: Typography.textLightBlack,

        //needed for 2 and 3 line ellipsis
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: threeLine ? null : 'nowrap',
        display: threeLine ? '-webkit-box' : null,
        WebkitLineClamp: threeLine ? 2 : null,
        WebkitBoxOrient: threeLine ? 'vertical' : null,
      },
    };

    let contentChildren = [];
    let nestedListItems = [];

    React.Children.forEach(children, (child) => {

      if (child === null) return;

      if (React.isValidElement(child) && child.type.displayName === 'ListItem') {
        nestedListItems.push(child);
      }
      else {
        contentChildren.push(child);
      }
    });

    if (leftIcon) {
      this._pushElement(
        contentChildren,
        leftIcon,
        this.mergeStyles(styles.icons, styles.leftIcon),
      );
    }

    if (rightIcon) {
      this._pushElement(
        contentChildren,
        rightIcon,
        this.mergeStyles(styles.icons, styles.rightIcon),
      );
    }

    if (leftAvatar) {
      this._pushElement(
        contentChildren,
        leftAvatar,
        this.mergeStyles(styles.avatars, styles.leftAvatar),
      );
    }

    if (rightAvatar) {
      this._pushElement(
        contentChildren,
        rightAvatar,
        this.mergeStyles(styles.avatars, styles.rightAvatar),
      );
    }

    if (leftCheckbox) {
      this._pushElement(
        contentChildren,
        leftCheckbox,
        this.mergeStyles(styles.leftCheckbox),
      );
    }

    //RightIconButtonElement
    const hasNestListItems = nestedListItems.length;
    const hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
    const needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;

    if (rightIconButton || needsNestedIndicator) {
      let rightIconButtonElement = rightIconButton;
      let rightIconButtonHandlers = {
        onKeyboardFocus: this._handleRightIconButtonKeyboardFocus,
        onMouseEnter: this._handleRightIconButtonMouseEnter,
        onMouseLeave: this._handleRightIconButtonMouseLeave,
        onTouchTap: this._handleRightIconButtonTouchTap,
        onMouseDown: this._handleRightIconButtonMouseUp,
        onMouseUp: this._handleRightIconButtonMouseUp,
      };

      // Create a nested list indicator icon if we don't have an icon on the right
      if (needsNestedIndicator) {
        rightIconButtonElement = this.state.open ?
          <IconButton><OpenIcon /></IconButton> :
          <IconButton><CloseIcon /></IconButton>;
        rightIconButtonHandlers.onTouchTap = this._handleNestedListToggle;
      }

      this._pushElement(
        contentChildren,
        rightIconButtonElement,
        this.mergeStyles(styles.rightIconButton),
        rightIconButtonHandlers,
      );
    }

    if (rightToggle) {
      this._pushElement(
        contentChildren,
        rightToggle,
        this.mergeStyles(styles.rightToggle),
      );
    }

    const nestedList = hasNestListItems ? (
      <ListNested nestedLevel={nestedLevel + 1} open={this.state.open}>
        {nestedListItems}
      </ListNested>
    ) : null;

    if (primaryText) {
      const secondaryTextElement = this._createTextElement(
        styles.primaryText,
        primaryText,
        'primaryText'
      );
      contentChildren.push(secondaryTextElement);
    }

    if (secondaryText) {
      const secondaryTextElement = this._createTextElement(
        styles.secondaryText,
        secondaryText,
        'secondaryText'
      );
      contentChildren.push(secondaryTextElement);
    }

    return hasCheckbox ? this._createLabelElement(styles, contentChildren) :
      disabled ? this._createDisabledElement(styles, contentChildren) : (
      <div>
        <EnhancedButton
          {...other}
          disabled={disabled}
          disableKeyboardFocus={disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused}
          linkButton={true}
          onKeyboardFocus={this._handleKeyboardFocus}
          onMouseLeave={this._handleMouseLeave}
          onMouseEnter={this._handleMouseEnter}
          onTouchStart={this._handleTouchStart}
          ref="enhancedButton"
          style={this.mergeAndPrefix(styles.root, style)}>
          <div style={this.mergeAndPrefix(styles.innerDiv, innerDivStyle)}>
            {contentChildren}
          </div>
        </EnhancedButton>
        {nestedList}
      </div>
    );

  },

  applyFocusState(focusState) {
    const button = this.refs.enhancedButton;
    const buttonEl = React.findDOMNode(button);

    if (button) {
      switch(focusState) {
        case 'none':
          buttonEl.blur();
          break;
        case 'focused':
          buttonEl.focus();
          break;
        case 'keyboard-focused':
          button.setKeyboardFocus();
          buttonEl.focus();
          break;
      }
    }
  },

  _createDisabledElement(styles, contentChildren) {
    const {
      innerDivStyle,
      style,
    } = this.props;

    const mergedDivStyles = this.mergeAndPrefix(
      styles.root,
      styles.innerDiv,
      innerDivStyle,
      style,
    );

    return React.createElement('div', { style: mergedDivStyles }, contentChildren);
  },

  _createLabelElement(styles, contentChildren) {
    const {
      innerDivStyle,
      style,
    } = this.props;

    const mergedLabelStyles = this.mergeAndPrefix(
      styles.root,
      styles.innerDiv,
      innerDivStyle,
      styles.label,
      style,
    );

    return React.createElement('label', { style: mergedLabelStyles }, contentChildren);
  },

  _createTextElement(styles, data, key) {
    const isAnElement = React.isValidElement(data);
    const mergedStyles = isAnElement ?
      this.mergeStyles(styles, data.props.style) : null;

    return isAnElement ? (
      React.cloneElement(data, {
        key: key,
        style: mergedStyles,
      })
    ) : (
      <div key={key} style={styles}>
        {data}
      </div>
    );
  },

  _handleKeyboardFocus(e, isKeyboardFocused) {
    this.setState({isKeyboardFocused: isKeyboardFocused});
    this.props.onKeyboardFocus(e, isKeyboardFocused);
  },

  _handleMouseEnter(e) {
    if (!this.state.touch) this.setState({hovered: true});
    this.props.onMouseEnter(e);
  },

  _handleMouseLeave(e) {
    this.setState({hovered: false});
    this.props.onMouseLeave(e);
  },

  _handleNestedListToggle(e) {
    e.stopPropagation();
    this.setState({open : !this.state.open});
    this.props.onNestedListToggle(this);
  },

  _handleRightIconButtonKeyboardFocus(e, isKeyboardFocused) {
    const iconButton = this.props.rightIconButton;
    let newState = {};

    newState.rightIconButtonKeyboardFocused = isKeyboardFocused;
    if (isKeyboardFocused) newState.isKeyboardFocused = false;
    this.setState(newState);

    if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(e, isKeyboardFocused);
  },

  _handleRightIconButtonMouseDown(e) {
    const iconButton = this.props.rightIconButton;
    e.stopPropagation();
    if (iconButton && iconButton.props.onMouseDown) iconButton.props.onMouseDown(e);
  },

  _handleRightIconButtonMouseLeave(e) {
    const iconButton = this.props.rightIconButton;
    this.setState({rightIconButtonHovered: false});
    if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(e);
  },

  _handleRightIconButtonMouseEnter(e) {
    const iconButton = this.props.rightIconButton;
    this.setState({rightIconButtonHovered: true});
    if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(e);
  },

  _handleRightIconButtonMouseUp(e) {
    const iconButton = this.props.rightIconButton;
    e.stopPropagation();
    if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(e);
  },

  _handleRightIconButtonTouchTap(e) {
    const iconButton = this.props.rightIconButton;

    //Stop the event from bubbling up to the list-item
    e.stopPropagation();
    if (iconButton && iconButton.props.onTouchTap) iconButton.props.onTouchTap(e);
  },

  _handleTouchStart(e) {
    this.setState({touch: true});
    this.props.onTouchStart(e);
  },

  _pushElement(children, element, baseStyles, additionalProps) {
    if (element) {
      const styles = this.mergeStyles(baseStyles, element.props.style);
      children.push(
        React.cloneElement(element, {
          key: children.length,
          style: styles,
          ...additionalProps,
        })
      );
    }
  },

});

module.exports = ListItem;
