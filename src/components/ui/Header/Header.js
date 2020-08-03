import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ElevationScroll from './ElevationScroll';
// Components Import
import logo from '../../../assets/logo.svg';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1.5em',
  },
  logo: {
    height: '6em',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '20px',
  },
  estimateBtn: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '40px',
    marginRight: '25px',
  },
}));

const Header = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  // Ghange handler for selected tab
  const tabChangeHandler = (event, value) => setValue(value);

  // Menu State
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const menuClickHandler = event => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const menuCloseHandler = event => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === '/estimate' && value !== 5) {
      setValue(5);
    }
  }, []);

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              to="/"
              disableRipple
              onClick={() => setValue(0)}
              component={Link}
              className={classes.logoContainer}
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              indicatorColor="primary"
              onChange={tabChangeHandler}
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                className={classes.tab}
                component={Link}
                to="/services"
                label="Servics"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revoltuion"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="contact us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.estimateBtn}
              component={Link}
              to="/estimate"
            >
              free estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
