import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

interface Props {
  color: 'red' | 'blue';
}

type MyButtonProps = Props & Omit<MuiButtonProps, keyof Props>;

const useStyles = makeStyles({
  root: {
    background: (props: Props) =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: (props: Props) =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  },
});

function MyButton(props: MyButtonProps) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
}

(MyButton as any).propTypes = {
  color: PropTypes.oneOf(['red', 'blue']).isRequired,
};

function AdaptingHook() {
  return (
    <React.Fragment>
      <MyButton color="red">Red</MyButton>
      <MyButton color="blue">Blue</MyButton>
    </React.Fragment>
  );
}

export default AdaptingHook;
