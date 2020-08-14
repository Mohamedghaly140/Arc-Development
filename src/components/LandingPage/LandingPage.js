import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button, Typography } from '@material-ui/core';

import animationData from '../../animations/landinganimation/data';
import ButtonArrow from '../ui/ButtonArrow/ButtonArrow';

const useStyles = makeStyles(theme => ({
  intro: {
    paddingTop: '2em',
    paddingBottom: '2em',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '0.5em',
      paddingBottom: '0.5em',
    },
  },
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    [theme.breakpoints.down('xs')]: {
      marginTop: 15,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    width: 145,
    height: 45,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnMoreBtn: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    width: 145,
    height: 45,
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          direction="row"
          className={classes.intro}
        >
          {/* ========== Hero Block ========== */}
          <Grid item sm style={{ margin: '5px auto' }}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              className={classes.title}
            >
              Bringing West Cost Technology
              <br /> to the Midwest
            </Typography>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Button className={classes.estimateBtn} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.learnMoreBtn} variant="outlined">
                  <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                  <ButtonArrow width={15} height={15} fill="red" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
