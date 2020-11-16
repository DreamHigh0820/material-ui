import * as React from 'react';
import addWeeks from 'date-fns/addWeeks';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import DateRangeDelimiter from '@material-ui/lab/DateRangeDelimiter';

function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined;
}

export default function MinMaxDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        disablePast
        value={value}
        maxDate={getWeeksAfter(value[0], 4)}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} variant="standard" />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} variant="standard" />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
