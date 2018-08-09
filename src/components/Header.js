import React from 'react';
import firebase from 'firebase/app';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';

import LeftMenu from './LeftMenu';

const styles = {
    root: {
      flexGrow: 1,
      // display: 'flex',
      // justifyContent: 'spacebetween'
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    contain: {
      display: 'flex',
      justifyContent: 'spacebetween'
    }
  };

class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logout = () => {
    console.log(this.props)
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.props.history.push('/login');
    }, function(error) {
      // An error happened.
      console.log(error)
    });
  }

  toggleLeftMenu = (open) => {
    this.setState({
      left: open
    })
  }

  render() {
    let isSignedIn = this.props.isSignedIn;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div style={{ display: 'flex', justifyContent: 'spaceBetween' }}>
        <AppBar position="static">
          <Toolbar  styles={styles.contain}>
            <Typography variant="title" color="inherit" styles={styles.flex}>
              Boarding House Finder
            </Typography>
            {auth && (
              <div>
                <Button onClick={() => this.toggleLeftMenu(true)}>
                  menu
                </Button>
                <Drawer open={this.state.left} onClose={() => this.toggleLeftMenu(false)}>
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={() => this.toggleLeftMenu(false)}
                    onKeyDown={() => this.toggleLeftMenu(false)}
                  >
                    {<LeftMenu />}
                  </div>
                </Drawer>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <Icon color="action">
                    person
                  </Icon>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  {isSignedIn ? 
                      <div>
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.logout}>Logout</MenuItem>
                      </div>
                    :
                      <MenuItem onClick={() => this.props.history.push('/login')}>Login</MenuItem>
                  }
                </Menu>
            </div>
            )
              // <Button color="inherit">Login</Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(Header);