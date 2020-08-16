import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Grid,
  Button,
  Typography,
  Container,
  useMediaQuery,
} from '@material-ui/core';

import animationData from '../../animations/landinganimation/data';
import ButtonArrow from '../ui/ButtonArrow/ButtonArrow';

import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';
import infoBackground from '../../assets/infoBackground.svg';

// Components
import RevolutionBlock from './RevolutionBlock/RevolutionBlock';

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
  learnMoreBtnHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    width: 145,
    height: 45,
  },
  specialText: {
    color: theme.palette.common.orange,
    fontFamily: 'Pacifico',
  },
  learnMoreBtn: {
    ...theme.typography.learnButton,
    fontSize: '0.8rem',
    height: 35,
  },
  servicesBlockItem: {
    marginTop: '1.5em',
    marginBottom: '1.5em',
  },
  infoBackground: {
    height: '80vh',
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

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
                <Button className={classes.learnMoreBtnHero} variant="outlined">
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
      {/* ========== Services Block ========== */}
      <Grid item className={classes.servicesBlockItem}>
        <Container>
          <Grid
            container
            direction="row"
            spacing={2}
            justify={matchesSM && 'center'}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Custom Software Development
              </Typography>
              <Typography variant="subtitle1">
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Complete digital solution, from investigation to{' '}
                <span className={classes.specialText}>celebration</span>
              </Typography>
              <Button className={classes.learnMoreBtn} variant="outlined">
                <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                <ButtonArrow width={15} height={15} fill="red" />
              </Button>
            </Grid>
            <Grid item>
              <img src={customSoftwareIcon} alt="Custom Software Development" />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      {/* ========== Services Block ========== */}
      <Grid item className={classes.servicesBlockItem}>
        <Container>
          <Grid
            container
            direction="row"
            spacing={2}
            justify={matchesSM ? 'center' : 'flex-end'}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                iOS/Android App Development
              </Typography>
              <Typography variant="subtitle1">
                Extend Functionality. Extend Access. Increase Engagment.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Integrate your web experience or create stand alone app with
                either mobile platform.
              </Typography>
              <Button className={classes.learnMoreBtn} variant="outlined">
                <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                <ButtonArrow width={15} height={15} fill="red" />
              </Button>
            </Grid>
            <Grid item>
              <img src={mobileAppsIcon} alt="Mobile Apps Development" />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      {/* ========== Services Block ========== */}
      <Grid item className={classes.servicesBlockItem}>
        <Container>
          <Grid
            container
            direction="row"
            spacing={2}
            justify={matchesSM && 'center'}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Website Development
              </Typography>
              <Typography variant="subtitle1">
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Optimized for Search Engines. Built for Speed.
              </Typography>
              <Button className={classes.learnMoreBtn} variant="outlined">
                <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                <ButtonArrow width={15} height={15} fill="red" />
              </Button>
            </Grid>
            <Grid item>
              <img src={websiteIcon} alt="Website Development" />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      {/* ========== The Revolution Block ========== */}
      <RevolutionBlock />
      {/* ========== The Information Block ========== */}
      <Grid item className={classes.infoBackground}>
        <Container style={{ height: '100%' }}>
          <Grid
            container
            direction="row"
            justify={matchesXS ? 'center' : 'space-between'}
            alignItems="center"
            style={{ height: '100%' }}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems={matchesXS ? 'center' : 'flex-start'}
              >
                <Grid item>
                  <Typography variant="h2" style={{ color: '#fff' }}>
                    About Us
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" gutterBottom>
                    Let's Get Personal
                  </Typography>
                </Grid>
                <Grid item>
                  <Button className={classes.learnMoreBtn} variant="outlined">
                    <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                    <ButtonArrow width={15} height={15} fill="red" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems={matchesXS ? 'center' : 'flex-end'}
              >
                <Grid item>
                  <Typography variant="h2" style={{ color: '#fff' }}>
                    Contact Us
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" gutterBottom>
                    Say hello
                  </Typography>
                </Grid>
                <Grid item>
                  <Button className={classes.learnMoreBtn} variant="outlined">
                    <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                    <ButtonArrow width={15} height={15} fill="red" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
