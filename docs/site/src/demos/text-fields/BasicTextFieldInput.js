import React, { PropTypes } from 'react';
import { createStyleSheet } from 'stylishly';
import { TextFieldInput } from 'material-ui/TextField';

const styleSheet = createStyleSheet('BasicTextField', () => {
  return {
    input: {
      margin: '0 10px',
    },
  };
});

export default function BasicTextField(props, context) {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div>
      <TextFieldInput defaultValue="Hello world" className={classes.input} />
      <TextFieldInput placeholder="Placeholder text" className={classes.input} />
      <TextFieldInput defaultValue="Disabled" disabled className={classes.input} />
    </div>
  );
}

BasicTextField.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

