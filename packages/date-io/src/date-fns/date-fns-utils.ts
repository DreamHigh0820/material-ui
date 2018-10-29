import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import addYears from 'date-fns/addYears';
import differenceInMilliseconds from 'date-fns/differenceInMilliseconds';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import endOfDay from 'date-fns/endOfDay';
import endOfMonth from 'date-fns/endOfMonth';
import endOfWeek from 'date-fns/endOfWeek';
import endOfYear from 'date-fns/endOfYear';
import format from 'date-fns/format';
import getHours from 'date-fns/getHours';
import getSeconds from 'date-fns/getSeconds';
import getYear from 'date-fns/getYear';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isEqual from 'date-fns/isEqual';
import isSameDay from 'date-fns/isSameDay';
import isValid from 'date-fns/isValid';
import dateFnsParse from 'date-fns/parse';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import setSeconds from 'date-fns/setSeconds';
import setYear from 'date-fns/setYear';
import startOfDay from 'date-fns/startOfDay';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import startOfYear from 'date-fns/startOfYear';

// Locale is not exported from date-fns, so we need to workaround that https://github.com/date-fns/date-fns/issues/932
import SampleLocale from 'date-fns/locale/en-US';
import { IUtils } from '../IUtils';

type Locale = typeof SampleLocale;

export default class DateFnsUtils implements IUtils<Date> {
  public locale?: Locale;

  public dateTime12hFormat = 'MMMM do hh:mm aaaa';

  public dateTime24hFormat = 'MMMM do HH:mm';

  public time12hFormat = 'hh:mm a';

  public time24hFormat = 'HH:mm';

  public dateFormat = 'MMMM do';

  constructor({ locale }: { locale?: Locale } = {}) {
    this.locale = locale;
  }

  // Note: date-fns input types are more lenient than this adapter, so we need to expose our more
  //  strict signature and delegate to the more lenient sigtature.  Otherwise, we have downstream type errors upon usage.

  public addDays(value: Date, count: number) {
    return addDays(value, count);
  }

  public isValid(value: Date) {
    return isValid(value);
  }

  public getDiff(value: Date, comparing: Date) {
    return differenceInMilliseconds(value, comparing);
  }

  public isAfter(value: Date, comparing: Date) {
    return isAfter(value, comparing);
  }

  public isBefore(value: Date, comparing: Date) {
    return isBefore(value, comparing);
  }

  public startOfDay(value: Date) {
    return startOfDay(value);
  }

  public endOfDay(value: Date) {
    return endOfDay(value);
  }

  public getHours(value: Date) {
    return getHours(value);
  }

  public setHours(value: Date, count: number) {
    return setHours(value, count);
  }

  public setMinutes(value: Date, count: number) {
    return setMinutes(value, count);
  }

  public getSeconds(value: Date) {
    return getSeconds(value);
  }

  public setSeconds(value: Date, count: number) {
    return setSeconds(value, count);
  }

  public isSameDay(value: Date, comparing: Date) {
    return isSameDay(value, comparing);
  }

  public getStartOfMonth(value: Date) {
    return startOfMonth(value);
  }

  public getYear(value: Date) {
    return getYear(value);
  }

  public setYear(value: Date, count: number) {
    return setYear(value, count);
  }

  public date(value?: any) {
    if (typeof value === 'undefined') {
      return new Date();
    }

    if (value === null) {
      return null;
    }

    return new Date(value);
  }

  public parse(value: string, formatString: string) {
    if (value === '') {
      return null;
    }

    return dateFnsParse(value, formatString, new Date());
  }

  public format(date: Date, formatString: string) {
    return format(date, formatString, { locale: this.locale });
  }

  public isEqual(date: Date, comparing: Date) {
    if (date === null && comparing === null) {
      return true;
    }

    return isEqual(date, comparing);
  }

  public isNull(date: Date) {
    return date === null;
  }

  public isAfterDay(date: Date, value: Date) {
    return isAfter(date, endOfDay(value));
  }

  public isBeforeDay(date: Date, value: Date) {
    return isBefore(date, startOfDay(value));
  }

  public isBeforeYear(date: Date, value: Date) {
    return isBefore(date, startOfYear(value));
  }

  public isAfterYear(date: Date, value: Date) {
    return isAfter(date, endOfYear(value));
  }

  public formatNumber(numberToFormat: string) {
    return numberToFormat;
  }

  public getMinutes(date: Date) {
    return date.getMinutes();
  }

  public getMonth(date: Date) {
    return date.getMonth();
  }

  public getMeridiemText(ampm: 'am' | 'pm') {
    return ampm === 'am' ? 'AM' : 'PM';
  }

  public getNextMonth(date: Date) {
    return addMonths(date, 1);
  }

  public getPreviousMonth(date: Date) {
    return addMonths(date, -1);
  }

  public mergeDateAndTime(date: Date, time: Date) {
    return this.setMinutes(
      this.setHours(date, this.getHours(time)),
      this.getMinutes(time)
    );
  }

  public getWeekdays() {
    const now = new Date();
    return eachDayOfInterval(
      {
        start: startOfWeek(now, { locale: this.locale }),
        end: endOfWeek(now, { locale: this.locale }),
      },
      { locale: this.locale }
    ).map(day => format(day, 'EEEEEE', { locale: this.locale }));
  }

  public getWeekArray(date: Date) {
    const start = startOfWeek(startOfMonth(date), { locale: this.locale });
    const end = endOfWeek(endOfMonth(date), { locale: this.locale });

    let count = 0;
    let current = start;
    const nestedWeeks: Date[][] = [];

    while (isBefore(current, end)) {
      const weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);
      current = addDays(current, 1);
      count += 1;
    }

    return nestedWeeks;
  }

  public getYearRange(start: Date, end: Date) {
    const startDate = startOfYear(new Date(start));
    const endDate = endOfYear(new Date(end));
    const years: Date[] = [];

    let current = startDate;
    while (isBefore(current, endDate)) {
      years.push(current);
      current = addYears(current, 1);
    }

    return years;
  }

  // displaying methpds
  public getCalendarHeaderText(date: Date) {
    return format(date, 'MMMM yyyy', { locale: this.locale });
  }

  public getYearText(date: Date) {
    return format(date, 'yyyy', { locale: this.locale });
  }

  public getDatePickerHeaderText(date: Date) {
    return format(date, 'EEE, MMM d', { locale: this.locale });
  }

  public getDateTimePickerHeaderText(date: Date) {
    return format(date, 'MMM d', { locale: this.locale });
  }

  public getDayText(date: Date) {
    return format(date, 'd', { locale: this.locale });
  }

  public getHourText(date: Date, ampm: boolean) {
    return format(date, ampm ? 'hh' : 'HH', { locale: this.locale });
  }

  public getMinuteText(date: Date) {
    return format(date, 'mm', { locale: this.locale });
  }

  public getSecondText(date: Date) {
    return format(date, 'ss', { locale: this.locale });
  }
}
