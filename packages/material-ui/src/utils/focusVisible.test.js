import { assert } from 'chai';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createMount } from '@material-ui/core/test-utils';
import useIsFocusVisible, { teardown as teardownFocusVisible } from './useIsFocusVisible';
import useForkRef from './useForkRef';

function dispatchFocusVisible(element) {
  element.ownerDocument.dispatchEvent(new window.Event('keydown'));
  element.focus();
}

function simulatePointerDevice() {
  // first focus on a page triggers focus visible until a pointer event
  // has been dispatched
  document.dispatchEvent(new window.Event('pointerdown'));
}

const SimpleButton = React.forwardRef(function SimpleButton(props, ref) {
  const { isFocusVisible, onBlurVisible, ref: focusVisibleRef } = useIsFocusVisible();

  const handleRef = useForkRef(focusVisibleRef, ref);

  const [focusVisible, setFocusVisible] = React.useState(false);

  const handleBlur = () => {
    if (focusVisible) {
      setFocusVisible(false);
      onBlurVisible();
    }
  };

  const handleFocus = (event) => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  };

  return (
    <button
      type="button"
      {...props}
      ref={handleRef}
      className={focusVisible ? 'focus-visible' : null}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
});

describe('focus-visible polyfill', () => {
  let mount;

  before(() => {
    // isolate test from previous component test that use the polyfill in the document scope
    teardownFocusVisible(document);
    mount = createMount({ strict: true });
  });

  after(() => {
    mount.cleanUp();
  });

  describe('focus inside shadowRoot', () => {
    // Only run on HeadlessChrome which has native shadowRoot support.
    // And jsdom which has limited support for shadowRoot (^12.0.0).
    if (!/HeadlessChrome|jsdom/.test(window.navigator.userAgent)) {
      return;
    }

    let rootElement;

    beforeEach(() => {
      rootElement = document.createElement('div');
      document.body.appendChild(rootElement);
      rootElement.attachShadow({ mode: 'open' });
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(rootElement.shadowRoot);
      teardownFocusVisible(rootElement.shadowRoot);
      document.body.removeChild(rootElement);
    });

    it('should set focus state for shadowRoot children', () => {
      const buttonRef = React.createRef();
      mount(
        <SimpleButton id="test-button" ref={buttonRef}>
          Hello
        </SimpleButton>,
        {
          attachTo: rootElement.shadowRoot,
        },
      );
      simulatePointerDevice();

      const { current: button } = buttonRef;
      if (button.nodeName !== 'BUTTON') {
        throw new Error('missing button');
      }

      assert.strictEqual(button.classList.contains('focus-visible'), false);

      button.focus();

      assert.strictEqual(button.classList.contains('focus-visible'), false);

      button.blur();
      dispatchFocusVisible(button);

      assert.strictEqual(button.classList.contains('focus-visible'), true);
    });
  });
});
