import * as React from 'react';
import { SxProps } from '@material-ui/system';
import { InternalStandardProps as StandardProps } from '..';
import { Theme } from '../styles';
import { StepConnectorClasses } from './stepConnectorClasses';

export type StepConnectorIcon = React.ReactElement | string | number;

export interface StepConnectorProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<StepConnectorClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export type StepConnectorClasskey = keyof NonNullable<StepConnectorProps['classes']>;

/**
 *
 * Demos:
 *
 * - [Steppers](https://material-ui.com/components/steppers/)
 *
 * API:
 *
 * - [StepConnector API](https://material-ui.com/api/step-connector/)
 */
export default function StepConnector(props: StepConnectorProps): JSX.Element;
