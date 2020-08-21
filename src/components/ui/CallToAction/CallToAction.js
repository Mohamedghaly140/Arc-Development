import React from 'react';
import { Typography, Grid, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ButtonArrow from '../../ui/ButtonArrow/ButtonArrow';
// Import images
import background from '../../../assets/background.jpg';
import mobileBackground from '../../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
  background: {
    height: '90vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
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
    ...theme.typography.learnButton,
    fontSize: '0.8rem',
    height: 35,
  },
}));

const CallToAction = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.background}>
      <Grid item style={{ width: '100%' }}>
        <Container style={{ height: '100%' }}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ height: '100%' }}
          >
            <Grid item>
              <Typography variant="h2">
                Simple Software. <br /> Revolutionary
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Take advantage of 21<sup>st</sup> Century
              </Typography>
              <Button className={classes.learnMoreBtn} variant="outlined">
                <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                <ButtonArrow width={15} height={15} fill="red" />
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.estimateBtn} variant="contained">
                Free Estimate
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
