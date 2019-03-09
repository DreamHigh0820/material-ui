import * as React from 'react';
import { getFormatByViews } from '../_helpers/date-utils';
import { BasePickerProps } from '../_shared/BasePicker';
import { usePickerState } from '../_shared/hooks/usePickerState';
import { useUtils } from '../_shared/hooks/useUtils';
import PureDateInput from '../_shared/PureDateInput';
import { ExtendWrapper } from '../wrappers/ExtendWrapper';
import ModalWrapper, { ModalWrapperProps } from '../wrappers/ModalWrapper';
import DatePicker, { BaseDatePickerProps } from './DatePicker';

export interface DatePickerModalProps
  extends BasePickerProps,
    BaseDatePickerProps,
    ExtendWrapper<ModalWrapperProps> {}

export function DatePickerModal(props: DatePickerModalProps) {
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

  const utils = useUtils();
  const { pickerProps, inputProps, wrapperProps } = usePickerState(props, () =>
    getFormatByViews(props.views!, utils)
  );

  return (
    <ModalWrapper
      disableFuture={disableFuture}
      disablePast={disablePast}
      labelFunc={labelFunc}
      maxDate={maxDate}
      minDate={minDate}
      onChange={() => ({})}
      ref={forwardedRef}
      value={value}
      isAccepted={false}
      InputComponent={PureDateInput}
      DateInputProps={{
        ...inputProps,
        ...other,
      }}
      {...wrapperProps}
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

DatePickerModal.defaultProps = {
  views: ['year', 'day'],
};

export default React.forwardRef((props: DatePickerModalProps, ref) => (
  <DatePickerModal {...props} forwardedRef={ref} />
));
