import React, { PureComponent, Fragment } from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import { IconButton, Icon, InputAdornment } from 'material-ui';

export default class CustomDateTimePicker extends PureComponent {
  state = {
    selectedDate: new Date('2018-01-01 18:54'),
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <DateTimePicker
            autoOk
            ampm={false}
            showTabs={false}
            autoSubmit={false}
            disableFuture
            fadeTimeout={0}
            value={selectedDate}
            onChange={this.handleDateChange}
            helperText="Hardcoded helper text"
            leftArrowIcon={<Icon> add_alarm </Icon>}
            rightArrowIcon={<Icon> snooze </Icon>}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Icon>add_alarm</Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="picker">
          <DateTimePicker
            keyboard
            label="Keyboard with error handler"
            onError={console.log}
            minDate={new Date('2018-01-01T00:00')}
            value={selectedDate}
            onChange={this.handleDateChange}
            format="YYYY/MM/DD hh:mm A"
            openPickerOnEnter={false}
            mask={[/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
          />
        </div>
      </Fragment>

    );
  }
}
