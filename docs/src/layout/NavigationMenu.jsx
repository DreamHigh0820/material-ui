import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, withStyles } from 'material-ui'
import { withRouter, Link } from 'react-router-dom'

const NavigationMenu = ({ classes }) => (
  <List component="nav">
    <Link to="/demo/datepicker" className={classes.navLink}>
      <ListItem button> Date Picker </ListItem> 
    </Link>

    <Link to="/demo/timepicker" className={classes.navLink}>
      <ListItem button> Time Picker </ListItem> 
    </Link>

     <Link to="/demo/datetimepicker" className={classes.navLink}>
      <ListItem button> Date & Time Picker </ListItem> 
    </Link>
  </List>
)

NavigationMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  navLink: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    ...theme.typography.subheading,

    '&>*': {
      paddingTop: 8,
      paddingBottom: 8,
    }
  }
})

export default withStyles(styles)(withRouter(NavigationMenu))