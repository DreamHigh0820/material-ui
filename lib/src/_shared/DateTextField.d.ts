import { ComponentClass, ReactNode } from 'react';
import { DateType } from '../constants/prop-types'
import { TextFieldProps } from '@material-ui/core/TextField';
import { Omit } from '@material-ui/core'
import { MaterialUiPickersDate } from '../typings/date'

export interface DateTextFieldProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
    value: DateType;
    minDate?: DateType;
    minDateMessage?: React.ReactNode;
    disablePast?: boolean;
    disableFuture?: boolean;
    maxDate?: DateType;
    maxDateMessage?: React.ReactNode;
    mask?: any;
    onBlur?: () => void;
    onChange: (date: MaterialUiPickersDate) => void;
    onClear?: () => void;
    keyboard?: boolean;
    format?: string;
    invalidLabel?: string;
    emptyLabel?: string;
    labelFunc?: (date: MaterialUiPickersDate, invalidLabel: string) => string;
    keyboardIcon?: ReactNode;
    invalidDateMessage?: React.ReactNode;
    clearable?: boolean;
    TextFieldComponent?: React.ComponentType<TextFieldProps>;
}

declare const DateTextField: ComponentClass<DateTextFieldProps>;

export default DateTextField;
