/* eslint-disable no-underscore-dangle */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import JssProvider from 'react-jss/lib/JssProvider';
import polyfill from 'react-lifecycles-compat';
import getPageContext, { getTheme } from 'docs/src/modules/styles/getPageContext';
import AppFrame from 'docs/src/modules/components/AppFrame';
import { lightTheme, darkTheme, setPrismTheme } from 'docs/src/modules/utils/prism';
import GoogleTag from 'docs/src/modules/components/GoogleTag';

// Inject the insertion-point-jss after docssearch
if (process.browser && !global.__INSERTION_POINT__) {
  global.__INSERTION_POINT__ = true;
  const styleNode = document.createComment('insertion-point-jss');
  const docsearchStylesSheet = document.querySelector('#insertion-point-jss');

  if (document.head && docsearchStylesSheet) {
    document.head.insertBefore(styleNode, docsearchStylesSheet.nextSibling);
  }
}

function uiThemeSideEffect(uiTheme) {
  setPrismTheme(uiTheme.paletteType === 'light' ? lightTheme : darkTheme);
  document.body.dir = uiTheme.direction;
}

class AppWrapper extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (typeof prevState.pageContext === 'undefined') {
      return {
        prevProps: nextProps,
        pageContext: nextProps.pageContext || getPageContext(),
      };
    }

    const { prevProps } = prevState;

    if (
      nextProps.uiTheme.paletteType !== prevProps.uiTheme.paletteType ||
      nextProps.uiTheme.direction !== prevProps.uiTheme.direction
    ) {
      return {
        prevProps: nextProps,
        pageContext: {
          ...prevState.pageContext,
          theme: getTheme(nextProps.uiTheme),
        },
      };
    }

    return null;
  }

  state = {};

  componentDidMount() {
    uiThemeSideEffect(this.props.uiTheme);

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js');
    }
  }

  componentDidUpdate() {
    uiThemeSideEffect(this.props.uiTheme);
  }

  render() {
    const { children } = this.props;
    const { pageContext } = this.state;

    return (
      <JssProvider
        jss={pageContext.jss}
        registry={pageContext.sheetsRegistry}
        generateClassName={pageContext.generateClassName}
      >
        <MuiThemeProvider theme={pageContext.theme} sheetsManager={pageContext.sheetsManager}>
          <Reboot />
          <AppFrame>{children}</AppFrame>
          <GoogleTag />
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object,
  uiTheme: PropTypes.object.isRequired,
};

export default connect(state => ({
  uiTheme: state.theme,
}))(polyfill(AppWrapper));
