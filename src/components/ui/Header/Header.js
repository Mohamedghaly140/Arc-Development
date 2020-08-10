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
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/styles';
import ElevationScroll from './ElevationScroll';
// Components Import
import logo from '../../../assets/logo.svg';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1.5em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '0.75em',
    },
  },
  logo: {
    height: '6em',
    [theme.breakpoints.down('md')]: {
      height: '5em',
    },
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: '#fff',
  },
  menuItem: {
    ...theme.typography.tab,
    paddingBottom: '10px',
    paddingTop: '10px',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    width: '40px',
    height: '40px',
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState(0);
  // Ghange handler for selected tab
  const tabChangeHandler = (event, newValue) => setValue(newValue);

  // Menu State
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Drawer State
  const [openDrawer, setOpenDrawer] = useState(false);

  const menuClickHandler = event => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const menuCloseHandler = event => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuItemClickHandler = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile App Development', link: '/mobileapps' },
    { name: 'Website Development', link: '/websites' },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        }
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case '/customsoftware':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case '/mobileapps':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case '/websites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if (value !== 2) {
          setValue(2);
        }
        break;
      case '/about':
        if (value !== 3) {
          setValue(3);
        }
        break;
      case '/contact':
        if (value !== 4) {
          setValue(4);
        }
        break;
      case '/estimate':
        if (value !== 5) {
          setValue(5);
        }
        break;

      default:
        break;
    }
  }, [value]);

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={tabChangeHandler}
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          onMouseOver={event => menuClickHandler(event)}
          className={classes.tab}
          label="Services"
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
      <Menu
        id="simple-menu"
        open={openMenu}
        anchorEl={anchorEl}
        onClose={menuCloseHandler}
        MenuListProps={{ onMouseLeave: menuCloseHandler }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={i}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={event => {
              menuItemClickHandler(event, i);
              setValue(1);
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
      >
        Example
      </SwipeableDrawer>
      <IconButton
        disableRipple
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              to="/"
              disableRipple
              component={Link}
              onClick={() => setValue(0)}
              className={classes.logoContainer}
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
