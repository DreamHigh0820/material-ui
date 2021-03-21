import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Stack from '@material-ui/core/Stack';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import * as CSS from 'csstype';

const Item = styled(Paper)(({ theme }) => ({
  // TODO withStyles removal
  ...(theme.typography.body2 as CSS.Properties),
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveStack() {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
