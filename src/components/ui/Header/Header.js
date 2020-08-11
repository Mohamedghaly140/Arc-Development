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
  List,
  ListItem,
  ListItemText,
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
  drawer: {
    backgroundColor: theme.palette.common.blue,
    width: '60%',
    maxWidth: '260px',
  },
  drawerItem: {
    ...theme.typography.tab,
    color: '#fff',
    opacity: 0.7,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
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
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Mobile App Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Website Development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: event => menuClickHandler(event),
    },
    { name: 'The Revoltuion', link: '/revolution', activeIndex: 2 },
    { name: 'About us', link: '/about', activeIndex: 3 },
    { name: 'Contact us', link: '/contact', activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [menuOptions, routes, selectedIndex, value]);

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={tabChangeHandler}
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
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
        style={{ zIndex: 1302 }}
        elevation={0}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
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
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List>
          {routes.map(route => (
            <ListItem
              divider
              button
              key={`${route}${route.activeIndex}`}
              component={Link}
              to={route.link}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            component={Link}
            to="/estimate"
            selected={value === 5}
            className={classes.drawerItemEstimate}
            classes={{ root: classes.drawerItemSelected }}
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
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
        <AppBar position="fixed" className={classes.appbar}>
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
