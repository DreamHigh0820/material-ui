import { ShallowWrapper } from 'enzyme';
import React from 'react';
import {
  DateTimePickerModal,
  DateTimePickerModalProps,
} from '../../DateTimePicker/DateTimePickerModal';
import { shallow } from '../test-utils';

describe('DateTimePickerModal', () => {
  let component: ShallowWrapper<DateTimePickerModalProps>;

  beforeEach(() => {
    component = shallow(
      <DateTimePickerModal value={null} onChange={jest.fn()} />
    );
  });

  it('Should renders', () => {
    // console.log(component.debug());
    expect(component).toBeTruthy();
  });
});
