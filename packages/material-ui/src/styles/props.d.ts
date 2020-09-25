import { AlertProps } from '../Alert';
import { AlertTitleProps } from '../AlertTitle';
import { AppBarProps } from '../AppBar';
import { AvatarProps } from '../Avatar';
import { BackdropProps } from '../Backdrop';
import { BadgeProps } from '../Badge';
import { BottomNavigationActionProps } from '../BottomNavigationAction';
import { BottomNavigationProps } from '../BottomNavigation';
import { BreadcrumbsProps } from '../Breadcrumbs';
import { ButtonBaseProps } from '../ButtonBase';
import { ButtonGroupProps } from '../ButtonGroup';
import { ButtonProps } from '../Button';
import { CardActionAreaProps } from '../CardActionArea';
import { CardActionsProps } from '../CardActions';
import { CardContentProps } from '../CardContent';
import { CardHeaderProps } from '../CardHeader';
import { CardMediaProps } from '../CardMedia';
import { CardProps } from '../Card';
import { CheckboxProps } from '../Checkbox';
import { ChipProps } from '../Chip';
import { CircularProgressProps } from '../CircularProgress';
import { CollapseProps } from '../Collapse';
import { ContainerProps } from '../Container';
import { CssBaselineProps } from '../CssBaseline';
import { DialogActionsProps } from '../DialogActions';
import { DialogContentProps } from '../DialogContent';
import { DialogContentTextProps } from '../DialogContentText';
import { DialogProps } from '../Dialog';
import { DialogTitleProps } from '../DialogTitle';
import { DividerProps } from '../Divider';
import { DrawerProps } from '../Drawer';
import { AccordionActionsProps } from '../AccordionActions';
import { AccordionDetailsProps } from '../AccordionDetails';
import { AccordionProps } from '../Accordion';
import { AccordionSummaryProps } from '../AccordionSummary';
import { FabProps } from '../Fab';
import { FilledInputProps } from '../FilledInput';
import { FormControlLabelProps } from '../FormControlLabel';
import { FormControlProps } from '../FormControl';
import { FormGroupProps } from '../FormGroup';
import { FormHelperTextProps } from '../FormHelperText';
import { FormLabelProps } from '../FormLabel';
import { GridProps } from '../Grid';
import { IconButtonProps } from '../IconButton';
import { IconProps } from '../Icon';
import { ImageListProps } from '../ImageList';
import { ImageListItemBarProps } from '../ImageListItemBar';
import { ImageListItemProps } from '../ImageListItem';
import { InputAdornmentProps } from '../InputAdornment';
import { InputBaseProps } from '../InputBase';
import { InputLabelProps } from '../InputLabel';
import { InputProps } from '../Input';
import { LinearProgressProps } from '../LinearProgress';
import { LinkProps } from '../Link';
import { ListItemAvatarProps } from '../ListItemAvatar';
import { ListItemIconProps } from '../ListItemIcon';
import { ListItemProps } from '../ListItem';
import { ListItemSecondaryActionProps } from '../ListItemSecondaryAction';
import { ListItemTextProps } from '../ListItemText';
import { ListProps } from '../List';
import { ListSubheaderProps } from '../ListSubheader';
import { MenuItemProps } from '../MenuItem';
import { MenuListProps } from '../MenuList';
import { MenuProps } from '../Menu';
import { MobileStepperProps } from '../MobileStepper';
import { ModalProps } from '../Modal';
import { NativeSelectProps } from '../NativeSelect';
import { Options as useMediaQueryOptions } from '../useMediaQuery';
import { OutlinedInputProps } from '../OutlinedInput';
import { PaperProps } from '../Paper';
import { PopoverProps } from '../Popover';
import { RadioGroupProps } from '../RadioGroup';
import { RadioProps } from '../Radio';
import { RatingProps } from '../Rating';
import { ScopedCssBaselineProps } from '../ScopedCssBaseline';
import { SelectProps } from '../Select';
import { SliderProps } from '../Slider';
import { SnackbarContentProps } from '../SnackbarContent';
import { SnackbarProps } from '../Snackbar';
import { StepButtonProps } from '../StepButton';
import { StepConnectorProps } from '../StepConnector';
import { StepContentProps } from '../StepContent';
import { StepIconProps } from '../StepIcon';
import { StepLabelProps } from '../StepLabel';
import { StepperProps } from '../Stepper';
import { StepProps } from '../Step';
import { SvgIconProps } from '../SvgIcon';
import { SwipeableDrawerProps } from '../SwipeableDrawer';
import { SwitchProps } from '../Switch';
import { TableBodyProps } from '../TableBody';
import { TableCellProps } from '../TableCell';
import { TableContainerProps } from '../TableContainer';
import { TableHeadProps } from '../TableHead';
import { TablePaginationProps } from '../TablePagination';
import { TableProps } from '../Table';
import { TableRowProps } from '../TableRow';
import { TableSortLabelProps } from '../TableSortLabel';
import { TableFooterProps } from '../TableFooter';
import { TabProps } from '../Tab';
import { TabsProps } from '../Tabs';
import { TextFieldProps } from '../TextField';
import { ToolbarProps } from '../Toolbar';
import { TooltipProps } from '../Tooltip';
import { TouchRippleProps } from '../ButtonBase/TouchRipple';
import { TypographyProps } from '../Typography';
import { WithWidthOptions } from '../withWidth';

export type ComponentsProps = {
  [Name in keyof ComponentsPropsList]?: Partial<ComponentsPropsList[Name]>;
};

export interface ComponentsPropsList {
  MuiAlert: AlertProps;
  MuiAlertTitle: AlertTitleProps;
  MuiAppBar: AppBarProps;
  MuiAvatar: AvatarProps;
  MuiBackdrop: BackdropProps;
  MuiBadge: BadgeProps;
  MuiBottomNavigation: BottomNavigationProps;
  MuiBottomNavigationAction: BottomNavigationActionProps;
  MuiBreadcrumbs: BreadcrumbsProps;
  MuiButton: ButtonProps;
  MuiButtonBase: ButtonBaseProps;
  MuiButtonGroup: ButtonGroupProps;
  MuiCard: CardProps;
  MuiCardActionArea: CardActionAreaProps;
  MuiCardActions: CardActionsProps;
  MuiCardContent: CardContentProps;
  MuiCardHeader: CardHeaderProps;
  MuiCardMedia: CardMediaProps;
  MuiCheckbox: CheckboxProps;
  MuiChip: ChipProps;
  MuiCircularProgress: CircularProgressProps;
  MuiCollapse: CollapseProps;
  MuiContainer: ContainerProps;
  MuiCssBaseline: CssBaselineProps;
  MuiDialog: DialogProps;
  MuiDialogActions: DialogActionsProps;
  MuiDialogContent: DialogContentProps;
  MuiDialogContentText: DialogContentTextProps;
  MuiDialogTitle: DialogTitleProps;
  MuiDivider: DividerProps;
  MuiDrawer: DrawerProps;
  MuiAccordion: AccordionProps;
  MuiAccordionActions: AccordionActionsProps;
  MuiAccordionDetails: AccordionDetailsProps;
  MuiAccordionSummary: AccordionSummaryProps;
  MuiFab: FabProps;
  MuiFilledInput: FilledInputProps;
  MuiFormControl: FormControlProps;
  MuiFormControlLabel: FormControlLabelProps;
  MuiFormGroup: FormGroupProps;
  MuiFormHelperText: FormHelperTextProps;
  MuiFormLabel: FormLabelProps;
  MuiGrid: GridProps;
  MuiImageList: ImageListProps;
  MuiImageListItem: ImageListItemProps;
  MuiImageListItemBar: ImageListItemBarProps;
  MuiIcon: IconProps;
  MuiIconButton: IconButtonProps;
  MuiInput: InputProps;
  MuiInputAdornment: InputAdornmentProps;
  MuiInputBase: InputBaseProps;
  MuiInputLabel: InputLabelProps;
  MuiLinearProgress: LinearProgressProps;
  MuiLink: LinkProps;
  MuiList: ListProps;
  MuiListItem: ListItemProps;
  MuiListItemAvatar: ListItemAvatarProps;
  MuiListItemIcon: ListItemIconProps;
  MuiListItemSecondaryAction: ListItemSecondaryActionProps;
  MuiListItemText: ListItemTextProps;
  MuiListSubheader: ListSubheaderProps;
  MuiMenu: MenuProps;
  MuiMenuItem: MenuItemProps;
  MuiMenuList: MenuListProps;
  MuiMobileStepper: MobileStepperProps;
  MuiModal: ModalProps;
  MuiNativeSelect: NativeSelectProps;
  MuiOutlinedInput: OutlinedInputProps;
  MuiPaper: PaperProps;
  MuiPopover: PopoverProps;
  MuiRadio: RadioProps;
  MuiRadioGroup: RadioGroupProps;
  MuiRating: RatingProps;
  MuiScopedCssBaseline: ScopedCssBaselineProps;
  MuiSelect: SelectProps;
  MuiSlider: SliderProps;
  MuiSnackbar: SnackbarProps;
  MuiSnackbarContent: SnackbarContentProps;
  MuiStep: StepProps;
  MuiStepButton: StepButtonProps;
  MuiStepConnector: StepConnectorProps;
  MuiStepContent: StepContentProps;
  MuiStepIcon: StepIconProps;
  MuiStepLabel: StepLabelProps;
  MuiStepper: StepperProps;
  MuiSvgIcon: SvgIconProps;
  MuiSwipeableDrawer: SwipeableDrawerProps;
  MuiSwitch: SwitchProps;
  MuiTab: TabProps;
  MuiTable: TableProps;
  MuiTableBody: TableBodyProps;
  MuiTableCell: TableCellProps;
  MuiTableContainer: TableContainerProps;
  MuiTableFooter: TableFooterProps;
  MuiTableHead: TableHeadProps;
  MuiTablePagination: TablePaginationProps;
  MuiTableRow: TableRowProps;
  MuiTableSortLabel: TableSortLabelProps;
  MuiTabs: TabsProps;
  MuiTextField: TextFieldProps;
  MuiToolbar: ToolbarProps;
  MuiTooltip: TooltipProps;
  MuiTouchRipple: TouchRippleProps;
  MuiTypography: TypographyProps;
  MuiUseMediaQuery: useMediaQueryOptions;
  MuiWithWidth: WithWidthOptions;
}
