import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
// import { NavLink } from 'react-router-dom'


class Nav extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ left: open });
  };

  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      list: {
        width: 250,
      },
    }));
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div>
              <IconButton onClick={this.toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
                <div
                  className={classes.list}
                  role="presentation"
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                  <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </Drawer>
            </div>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Nav
