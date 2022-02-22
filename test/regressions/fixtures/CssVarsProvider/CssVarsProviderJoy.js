import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

// All buttons should look the same, otherwise, it means that multiple instances with different prefixes do not work.
export default function VariantColorJoy() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <CssVarsProvider>
        <Button>Button</Button>
      </CssVarsProvider>
      <CssVarsProvider prefix="foo">
        <Button>Button</Button>
      </CssVarsProvider>
      <CssVarsProvider prefix="bar">
        <Button>Button</Button>
      </CssVarsProvider>
    </Box>
  );
}
