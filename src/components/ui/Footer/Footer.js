import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Grid, Hidden } from '@material-ui/core';

import footerAdornment from '../../../assets/Footer Adornment.svg';
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';
import instagram from '../../../assets/instagram.svg';

const useStyle = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  iconsContainer: {
    position: 'absolute',
    bottom: '1em',
    right: '1.5em',
  },
  icons: {
    width: '2em',
    height: '2em',
  },
}));

const Footer = props => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
              <Grid
                item
                component={Link}
                to="/"
                className={classes.link}
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapps"
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                IOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/websites"
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setValue(2)}
              >
                The Revoltuion
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => setValue(3)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
                onClick={() => setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        alt="footer decortaive slash"
        src={footerAdornment}
      />
      <Grid container justify="flex-end" className={classes.iconsContainer} spacing={2}>
        <Grid
          item
          component={'a'}
          href="https://www.facebook.com/mohamed.ghaly.6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="facebook" src={facebook} className={classes.icons} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://twitter.com/Mohamedghaly140?fbclid=IwAR0lkzFrZGajnkFZA_v8bGha84BnTR-u7HYwFrUpJ4HLUaNRCtfTmsjZS84"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="twitter" src={twitter} className={classes.icons} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.instagram.com/Mohamedghaly140/?fbclid=IwAR2N1di1kLseR3ZbOhykh6El575ZfuMeF67P_h4McVh9Z72YMAaTuIWNUvs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="instagram" src={instagram} className={classes.icons} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
