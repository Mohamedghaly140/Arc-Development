import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
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
}));

const HeaderMenu = () => {
  const classes = useStyles();

  // Menu State
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuClickHandler = event => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const menuCloseHandler = event => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuItemClickHandler = (event, index) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
  };

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile App Development', link: '/mobileapps' },
    { name: 'Website Development', link: '/websites' },
  ];

  return (
    <Fragment>
      <Menu
        id="simple-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={menuCloseHandler}
        MenuListProps={{ onMouseLeave: menuCloseHandler }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
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
};

export default HeaderMenu;
