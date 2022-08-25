import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';

export default function RadioButtonsGroup() {
  const [justify, setJustify] = React.useState('flex-start');
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography id="segmented-controls-example" fontWeight="lg" fontSize="sm">
        Justify:
      </Typography>
      <RadioGroup
        row
        aria-labelledby="segmented-controls-example"
        name="justify"
        value={justify}
        onChange={(event) => setJustify(event.target.value)}
        sx={{
          minHeight: 48,
          padding: '4px',
          borderRadius: 'md',
          bgcolor: 'neutral.softBg',
          '--RadioGroup-gap': '4px',
          '--Radio-action-radius': '8px',
        }}
      >
        {['flex-start', 'center', 'flex-end'].map((item) => (
          <Radio
            color="neutral"
            value={item}
            disableIcon
            label={item}
            variant="plain"
            sx={{
              px: 2,
              alignItems: 'center',
            }}
            componentsProps={{
              action: ({ checked }) => ({
                sx: {
                  ...(checked && {
                    bgcolor: 'background.surface',
                    boxShadow: 'md',
                    '&:hover': {
                      bgcolor: 'background.surface',
                    },
                  }),
                },
              }),
            }}
          />
        ))}
      </RadioGroup>
    </Box>
  );
}
