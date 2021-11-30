import { createBox } from '@mui/system';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/base/generateUtilityClass';
import { OverridableComponent } from '@mui/types';
import { BoxTypeMap } from './BoxProps';
import defaultTheme from '../styles/defaultTheme';

const Box = createBox({
  defaultTheme,
  defaultClassName: 'MuiBox-root',
  generateClassName: ClassNameGenerator.generate,
}) as OverridableComponent<BoxTypeMap>;

export default Box;
