import * as React from 'react';
import { StandardProps } from '@material-ui/core';

export interface TimelineContentProps extends StandardProps<{}, TimelineContentClassKey> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}

export type TimelineContentClassKey = 'root';

/**
 *
 * Demos:
 *
 * - [Timeline](https://material-ui.com/components/timeline/)
 *
 * API:
 *
 * - [TimelineContent API](https://material-ui.com/api/timeline-content/)
 */
export default function TimelineContent(props: TimelineContentProps): JSX.Element;
