import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Button size="small" className={classes.margin}>
          Small
        </Button>
        <Button size="medium" className={classes.margin}>
          Medium
        </Button>
        <Button size="large" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" className={classes.margin}>
          Small
        </Button>
        <Button variant="outlined" size="medium" className={classes.margin}>
          Medium
        </Button>
        <Button variant="outlined" size="large" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" className={classes.margin}>
          Small
        </Button>
        <Button variant="contained" size="medium" className={classes.margin}>
          Medium
        </Button>
        <Button variant="contained" size="large" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <IconButton aria-label="delete" className={classes.margin} size="small">
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
