import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
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

const HeaderTabs = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  // Ghange handler for selected tab
  const tabChangeHandler = (event, value) => setValue(value);

  return (
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
    </Fragment>
  );
};

export default HeaderTabs;
