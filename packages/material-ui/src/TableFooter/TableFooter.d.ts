import { SxProps } from '@material-ui/system';
import * as React from 'react';
import { Theme } from '..';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';

export interface TableFooterTypeMap<P = {}, D extends React.ElementType = 'tfoot'> {
  props: P & {
    /**
     * The content of the component, normally `TableRow`.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: {
      /** Styles applied to the root element. */
      root?: string;
    };
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  defaultComponent: D;
}
/**
 *
 * Demos:
 *
 * - [Tables](https://material-ui.com/components/tables/)
 *
 * API:
 *
 * - [TableFooter API](https://material-ui.com/api/table-footer/)
 */
declare const TableFooter: OverridableComponent<TableFooterTypeMap>;

export type TableFooterClassKey = keyof NonNullable<TableFooterTypeMap['props']['classes']>;

export type TableFooterProps<
  D extends React.ElementType = TableFooterTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TableFooterTypeMap<P, D>, D>;

export default TableFooter;
