import { AppBarClassKey } from '../AppBar/AppBar';
import { AvatarClassKey } from '../Avatar/Avatar';
import { BackdropClassKey } from '../Modal/Backdrop';
import { BadgeClassKey } from '../Badge/Badge';
import { BottomNavigationClassKey } from '../BottomNavigation/BottomNavigation';
import { BottomNavigationActionClassKey } from '../BottomNavigation/BottomNavigationAction';
import { ButtonClassKey } from '../Button/Button';
import { ButtonBaseClassKey } from '../ButtonBase/ButtonBase';
import { CardClassKey } from '../Card/Card';
import { CardActionsClassKey } from '../Card/CardActions';
import { CardContentClassKey } from '../Card/CardContent';
import { CardHeaderClassKey } from '../Card/CardHeader';
import { CardMediaClassKey } from '../Card/CardMedia';
import { CheckboxClassKey } from '../Checkbox/Checkbox';
import { ChipClassKey } from '../Chip/Chip';
import { CircularProgressClassKey } from '../Progress/CircularProgress';
import { CollapseClassKey } from '../transitions/Collapse';
import { DialogActionsClassKey } from '../Dialog/DialogActions';
import { DialogClassKey } from '../Dialog/Dialog';
import { DialogContentClassKey } from '../Dialog/DialogContent';
import { DialogContentTextClassKey } from '../Dialog/DialogContentText';
import { DialogTitleClassKey } from '../Dialog/DialogTitle';
import { DividerClassKey } from '../Divider/Divider';
import { DrawerClassKey } from '../Drawer/Drawer';
import { FormControlClassKey } from '../Form/FormControl';
import { FormControlLabelClassKey } from '../Form/FormControlLabel';
import { FormGroupClassKey } from '../Form/FormGroup';
import { FormHelperTextClassKey } from '../Form/FormHelperText';
import { FormLabelClassKey } from '../Form/FormLabel';
import { GridClassKey } from '../Grid/Grid';
import { GridListClassKey } from '../GridList/GridList';
import { GridListTileBarClassKey } from '../GridList/GridListTileBar';
import { GridListTileClassKey } from '../GridList/GridListTile';
import { IconButtonClassKey } from '../IconButton/IconButton';
import { IconClassKey } from '../Icon/Icon';
import { InputAdornmentClassKey } from '../Input/InputAdornment';
import { InputClassKey } from '../Input/Input';
import { InputLabelClassKey } from '../Input/InputLabel';
import { LinearProgressClassKey } from '../Progress/LinearProgress';
import { ListClassKey } from '../List/List';
import { ListItemAvatarClassKey } from '../List/ListItemAvatar';
import { ListItemClassKey } from '../List/ListItem';
import { ListItemIconClassKey } from '../List/ListItemIcon';
import { ListItemSecondaryActionClassKey } from '../List/ListItemSecondaryAction';
import { ListItemTextClassKey } from '../List/ListItemText';
import { ListSubheaderClassKey } from '../List/ListSubheader';
import { MenuClassKey } from '../Menu/Menu';
import { MenuItemClassKey } from '../Menu/MenuItem';
import { MenuListClassKey } from '../Menu/MenuList';
import { MobileStepperClassKey } from '../MobileStepper/MobileStepper';
import { ModalClassKey } from '../Modal/Modal';
import { PaperClassKey } from '../Paper/Paper';
import { PopoverClassKey } from '../Popover/Popover';
import { RadioClassKey } from '../Radio/Radio';
import { RadioGroupClassKey } from '../Radio/RadioGroup';
import { SelectClassKey } from '../Select/Select';
import { SelectInputClassKey } from '../Select/SelectInput';
import { SnackbarClassKey } from '../Snackbar/Snackbar';
import { SnackbarContentClassKey } from '../Snackbar/SnackbarContent';
import { StyleRules } from './withStyles';
import { SvgIconClassKey } from '../SvgIcon/SvgIcon';
import { SwitchBaseClassKey } from '../internal/SwitchBase';
import { SwitchClassKey } from '../Switch/Switch';
import { TabClassKey } from '../Tabs/Tab';
import { TabIndicatorClassKey } from '../Tabs/TabIndicator';
import { TableClassKey } from '../Table/Table';
import { TableBodyClassKey } from '../Table/TableBody';
import { TableCellClassKey } from '../Table/TableCell';
import { TableFooterClassKey } from '../Table/TableFooter';
import { TableHeadClassKey } from '../Table/TableHead';
import { TablePaginationClassKey } from '../Table/TablePagination';
import { TableRowClassKey } from '../Table/TableRow';
import { TableSortLabelClassKey } from '../Table/TableSortLabel';
import { TabsClassKey } from '../Tabs/Tabs';
import { TabScrollButtonClassKey } from '../Tabs/TabScrollButton';
import { TextareaClassKey } from '../Input/Textarea';
import { ToolbarClassKey } from '../Toolbar/Toolbar';
import { TooltipClassKey } from '../Tooltip/Tooltip';
import { TouchRippleClassKey } from '../ButtonBase/TouchRipple';
import { TypographyClassKey } from '../Typography/Typography';

export type Overrides = {
  [Name in keyof ComponentNameToClassKey]?: Partial<StyleRules<ComponentNameToClassKey[Name]>>
};

type ComponentNameToClassKey = {
  MuiAppBar: AppBarClassKey;
  MuiAvatar: AvatarClassKey;
  MuiBackdrop: BackdropClassKey;
  MuiBadge: BadgeClassKey;
  MuiBottomNavigation: BottomNavigationClassKey;
  MuiBottomNavigationAction: BottomNavigationActionClassKey;
  MuiButton: ButtonClassKey;
  MuiButtonBase: ButtonBaseClassKey;
  // MuiCard: CardClassKey;
  MuiCardActions: CardActionsClassKey;
  MuiCardContent: CardContentClassKey;
  MuiCardHeader: CardHeaderClassKey;
  MuiCardMedia: CardMediaClassKey;
  MuiCheckbox: CheckboxClassKey;
  MuiChip: ChipClassKey;
  MuiCircularProgress: CircularProgressClassKey;
  MuiCollapse: CollapseClassKey;
  MuiDialog: DialogClassKey;
  MuiDialogActions: DialogActionsClassKey;
  MuiDialogContent: DialogContentClassKey;
  MuiDialogContentText: DialogContentTextClassKey;
  MuiDialogTitle: DialogTitleClassKey;
  MuiDivider: DividerClassKey;
  MuiDrawer: DrawerClassKey;
  MuiFormControl: FormControlClassKey;
  MuiFormControlLabel: FormControlLabelClassKey;
  MuiFormGroup: FormGroupClassKey;
  MuiFormHelperText: FormHelperTextClassKey;
  MuiFormLabel: FormLabelClassKey;
  MuiGrid: GridClassKey;
  MuiGridList: GridListClassKey;
  MuiGridListTile: GridListTileClassKey;
  MuiGridListTileBar: GridListTileBarClassKey;
  MuiIcon: IconClassKey;
  MuiIconButton: IconButtonClassKey;
  MuiInput: InputClassKey;
  MuiInputAdornment: InputAdornmentClassKey;
  MuiInputLabel: InputLabelClassKey;
  MuiLinearProgress: LinearProgressClassKey;
  MuiList: ListClassKey;
  MuiListItem: ListItemClassKey;
  MuiListItemAvatar: ListItemAvatarClassKey;
  MuiListItemIcon: ListItemIconClassKey;
  MuiListItemSecondaryAction: ListItemSecondaryActionClassKey;
  MuiListItemText: ListItemTextClassKey;
  MuiListSubheader: ListSubheaderClassKey;
  MuiMenu: MenuClassKey;
  MuiMenuItem: MenuItemClassKey;
  // MuiMenuList: MenuListClassKey;
  MuiMobileStepper: MobileStepperClassKey;
  MuiModal: ModalClassKey;
  MuiPaper: PaperClassKey;
  MuiPopover: PopoverClassKey;
  MuiRadio: RadioClassKey;
  // MuiRadioGroup: RadioGroupClassKey;
  MuiSelect: SelectClassKey;
  // MuiSelectInput: SelectInputClassKey;
  MuiSnackbar: SnackbarClassKey;
  MuiSnackbarContent: SnackbarContentClassKey;
  MuiSvgIcon: SvgIconClassKey;
  MuiSwitchBase: SwitchBaseClassKey;
  MuiSwitch: SwitchClassKey;
  MuiTab: TabClassKey;
  MuiTabIndicator: TabIndicatorClassKey;
  MuiTable: TableClassKey;
  MuiTableBody: TableBodyClassKey;
  MuiTableCell: TableCellClassKey;
  MuiTableFooter: TableFooterClassKey;
  MuiTableHead: TableHeadClassKey;
  MuiTablePagination: TablePaginationClassKey;
  MuiTableRow: TableRowClassKey;
  MuiTableSortLabel: TableSortLabelClassKey;
  MuiTabs: TabsClassKey;
  MuiTabScrollButton: TabScrollButtonClassKey;
  MuiTextarea: TextareaClassKey;
  // MuiTextField: TextFieldClassKey;
  MuiToolbar: ToolbarClassKey;
  MuiTooltip: TooltipClassKey;
  MuiTouchRipple: TouchRippleClassKey;
  MuiTypography: TypographyClassKey;
};
