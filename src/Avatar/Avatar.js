import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(20),
    borderRadius: '50%',
    overflow: 'hidden',
    userSelect: 'none',
  },
  colorDefault: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.background.avatar,
  },
  img: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    // Handle non-square image. The property isn't supported by IE11.
    objectFit: 'cover',
  },
});

function Avatar(props) {
  const {
    alt,
    children: childrenProp,
    childrenClassName: childrenClassNameProp,
    classes,
    className: classNameProp,
    component: ComponentProp,
    imgProps,
    sizes,
    src,
    srcSet,
    ...other
  } = props;

  const className = classNames(
    classes.root,
    {
      [classes.colorDefault]: childrenProp && !src && !srcSet,
    },
    classNameProp,
  );
  let children = null;

  if (childrenProp) {
    if (
      childrenClassNameProp &&
      typeof childrenProp !== 'string' &&
      React.isValidElement(childrenProp)
    ) {
      const childrenClassName = classNames(childrenClassNameProp, childrenProp.props.className);
      children = React.cloneElement(childrenProp, { className: childrenClassName });
    } else {
      children = childrenProp;
    }
  } else if (src || srcSet) {
    children = (
      <img
        alt={alt}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        className={classes.img}
        {...imgProps}
      />
    );
  }

  return (
    <ComponentProp className={className} {...other}>
      {children}
    </ComponentProp>
  );
}

Avatar.propTypes = {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: PropTypes.string,
  /**
   * Used to render icon or text elements inside the Avatar.
   * `src` and `alt` props will not be used and no `img` will
   * be rendered by default.
   *
   * This can be an element, or just a string.
   */
  children: PropTypes.node,
  /**
   * @ignore
   * The className of the child element.
   * Used by Chip and ListItemIcon to style the Avatar icon.
   */
  childrenClassName: PropTypes.string,
  /**
   * Useful to extend the style applied to components.
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
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Properties applied to the `img` element when the component
   * is used to display an image.
   */
  imgProps: PropTypes.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: PropTypes.string,
  /**
   * The `src` attribute for the `img` element.
   */
  src: PropTypes.string,
  /**
   * The `srcSet` attribute for the `img` element.
   */
  srcSet: PropTypes.string,
};

Avatar.defaultProps = {
  component: 'div',
};

export default withStyles(styles, { name: 'MuiAvatar' })(Avatar);
