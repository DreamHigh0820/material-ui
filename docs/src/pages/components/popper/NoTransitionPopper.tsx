import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  }),
);

export default function NoTransitionPopper() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(prev => (prev ? null : event.currentTarget));
  };

  const open = Boolean(anchorEl);
  const id = open ? 'no-transition-popper' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Toggle Popper
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper>
          <Typography className={classes.typography}>The content of the Popper.</Typography>
        </Paper>
      </Popper>
    </div>
  );
}
