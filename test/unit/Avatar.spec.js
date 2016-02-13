import React from 'react';
import {Avatar} from 'src';
import {shallow} from 'enzyme';
import {assert} from 'chai';

describe('<Avatar />', () => {

  const testChildren = <div className="unique">Hello World</div>;

  it('renders children by default', () => {
    const wrapper = shallow(
      <Avatar>{testChildren}</Avatar>
    );

    assert.ok(wrapper.contains(testChildren), 'should contain the children');
  });

  it('renders children and an icon if passed in', () => {
    const icon = <div className="testIcon" />;
    const wrapper = shallow(
      <Avatar icon={icon}>{testChildren}</Avatar>
    );

    assert.ok(wrapper.contains(testChildren), 'should contain the children');
    // Finding by class as avatar clones element and changes the props
    assert.ok(wrapper.find('.testIcon').length, 'should contain the icon');
  });

  it('only renders an image when the src prop is set', () => {
    const wrapper = shallow(
      <Avatar src="face.jpg">{testChildren}</Avatar>
    );

    assert.notOk(!wrapper.contains(testChildren), 'should not contain the children');
    assert.ok(wrapper.is('img'), 'should be an image');
    assert.ok(wrapper.is({src: 'face.jpg'}), 'should have the src passed into props');

    wrapper.setProps({src: 'meow.jpg'});
    assert.ok(wrapper.is({src: 'meow.jpg'}), 'should have changed the src');
  });

});
