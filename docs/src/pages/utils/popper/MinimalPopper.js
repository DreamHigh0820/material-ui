import React from 'react';
import Popper from '@material-ui/core/Popper';

function MinimalPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : null;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div>The content of the Popper.</div>
      </Popper>
    </div>
  );
}

export default MinimalPopper;
