import * as React from 'react';
import { getFormatByViews } from '../_helpers/date-utils';
import {
  BaseKeyboardPickerProps,
  useKeyboardPickerState,
} from '../_shared/hooks/useKeyboardPickerState';
import { useUtils } from '../_shared/hooks/useUtils';
import KeyboardDateInput from '../_shared/KeyboardDateInput';
import { ExtendWrapper } from '../wrappers/ExtendWrapper';
import ModalWrapper, { ModalWrapperProps } from '../wrappers/ModalWrapper';
import DatePicker, { BaseDatePickerProps } from './DatePicker';

export interface DatePickerModalProps
  extends BaseKeyboardPickerProps,
    BaseDatePickerProps,
    ExtendWrapper<ModalWrapperProps> {}

export function KeyboardDatePicker(props: DatePickerModalProps) {
  const utils = useUtils();
  const { pickerProps, wrapperProps, inputProps } = useKeyboardPickerState(props, () =>
    getFormatByViews(props.views!, utils)
  );
  const {
    allowKeyboardControl,
    animateYearScrolling,
    autoOk,
    disableFuture,
    disablePast,
    format,
    forwardedRef,
    labelFunc,
    leftArrowIcon,
    maxDate,
    minDate,
    initialFocusedDate,
    onChange,
    openToYearSelection,
    renderDay,
    rightArrowIcon,
    shouldDisableDate,
    value,
    views,
    openTo,
    onMonthChange,
    onYearChange,
    ...other
  } = props;

  return (
    <ModalWrapper
      disableFuture={disableFuture}
      disablePast={disablePast}
      labelFunc={labelFunc}
      maxDate={maxDate}
      minDate={minDate}
      ref={forwardedRef}
      value={value}
      isAccepted={false}
      InputComponent={KeyboardDateInput}
      DateInputProps={inputProps}
      {...wrapperProps}
      {...other}
    >
      <DatePicker
        {...pickerProps}
        allowKeyboardControl={allowKeyboardControl}
        animateYearScrolling={animateYearScrolling}
        disableFuture={disableFuture}
        disablePast={disablePast}
        leftArrowIcon={leftArrowIcon}
        maxDate={maxDate}
        minDate={minDate}
        openToYearSelection={openToYearSelection}
        renderDay={renderDay}
        rightArrowIcon={rightArrowIcon}
        shouldDisableDate={shouldDisableDate}
        views={views}
        openTo={openTo}
      />
    </ModalWrapper>
  );
}

KeyboardDatePicker.defaultProps = {
  views: ['year', 'day'],
};

export default React.forwardRef((props: DatePickerModalProps, ref) => (
  <KeyboardDatePicker {...props} forwardedRef={ref} />
));
