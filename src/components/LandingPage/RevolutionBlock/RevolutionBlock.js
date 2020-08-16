import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import ButtonArrow from '../../ui/ButtonArrow/ButtonArrow';
import revolutionBackground from '../../../assets/repeatingBackground.svg';

const useStyles = makeStyles(theme => ({
  revolutionSection: {
    height: '80vh',
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
  },
  card: {
    paddingTop: '4em',
    paddingBottom: '4em',
    boxShadow: theme.shadows[10],
    borderRadius: 20,
  },
  learnMoreBtn: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    width: 145,
    height: 45,
  },
}));

const RevolutionBlock = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.revolutionSection}
      >
        <Container>
          <Card className={classes.card}>
            <CardContent>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Typography variant="h3">The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Button className={classes.learnMoreBtn} variant="outlined">
                    <span style={{ marginRight: 10 }}>Learn More</span>{' '}
                    <ButtonArrow width={15} height={15} fill="red" />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
};

export default RevolutionBlock;
