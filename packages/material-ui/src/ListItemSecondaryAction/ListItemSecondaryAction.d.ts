import { StandardProps } from '..';

export interface ListItemSecondaryActionProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ListItemSecondaryActionClassKey> {}

export type ListItemSecondaryActionClassKey = 'root';

declare const ListItemSecondaryAction: React.ComponentType<ListItemSecondaryActionProps>;

export default ListItemSecondaryAction;
