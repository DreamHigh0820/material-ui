// @flow weak
/* eslint-disable no-param-reassign */

import invariant from 'invariant';

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easingInternal = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
};

// Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
const durationIntenal = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195,
};

/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
*/
export default {
  easing: easingInternal,

  duration: durationIntenal,

  create(props = ['all'], {
    duration = durationIntenal.standard,
    easing = easingInternal.easeInOut,
    delay = 0,
    ...other
  } = {}) {
    invariant(typeof props === 'string' || Array.isArray(props),
      'argument "props" must be a string or Array');
    invariant(Number.isInteger(duration),
      'argument "duration" must be a number');
    invariant(typeof easing === 'string',
      'argument "easing" must be a string');
    invariant(Number.isInteger(delay),
      'argument "delay" must be a string');
    invariant(Object.keys(other).length === 0,
      `unrecognized argument(s) [${Object.keys(other).join(',')}]`);

    return (Array.isArray(props) ? props : [props])
      .map((value) => `${value} ${duration}ms ${easing} ${delay}ms`)
      .join(',');
  },

  getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    const constant = height / 36;
    const duration = (4 + (15 * (constant ** 0.25)) + (constant / 5)) * 10;

    return Math.round(duration);
  },
};

export const easing = easingInternal;
export const duration = durationIntenal;
