import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	Container,
	Grid,
	Button,
	Typography,
	useMediaQuery,
} from '@material-ui/core';

import ButtonArrow from '../ButtonArrow/ButtonArrow';

import customSoftwareIcon from '../../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../../assets/mobileIcon.svg';
import websiteIcon from '../../../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
	servicesContainer: {
		marginTop: '1.5em',
		marginBottom: '1.5em',
	},
	servicesBlockItem: {
		marginTop: '1.5em',
		marginBottom: '1.5em',
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
	title: {
		borderBottom: '1px solid #CCC',
	},
}));

const Services = props => {
	const { setValue, setSelectedIndex } = props;

	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<Grid container direction="column" className={classes.servicesContainer}>
			<Grid item className={classes.servicesBlockItem}>
				<Container>
					<Typography variant="h2" className={classes.title}>
						Services
					</Typography>
				</Container>
			</Grid>
			<Grid item className={classes.servicesBlockItem}>
				<Container>
					<Grid
						container
						direction="row"
						spacing={2}
						justify={matchesSM ? 'center' : 'flex-end'}
						alignItems="center"
						style={{ textAlign: matchesXS && 'center' }}
					>
						<Grid item style={{ width: !matchesXS && '35em' }}>
							<Typography variant="h4" gutterBottom>
								iOS/Android App Development
							</Typography>
							<Typography variant="subtitle1">
								Extend Functionality. Extend Access. Increase Engagment.
							</Typography>
							<Typography variant="subtitle1" gutterBottom>
								Integrate your web experience or create stand alone app with
								{matchesXS ? '' : <br />}
								either mobile platform.
							</Typography>
							<Button
								component={Link}
								to="/mobileapps"
								onClick={() => {
									setValue(1);
									setSelectedIndex(2);
								}}
								className={classes.learnMoreBtn}
								variant="outlined"
							>
								<span style={{ marginRight: 10 }}>Learn More</span>{' '}
								<ButtonArrow width={15} height={15} fill="red" />
							</Button>
						</Grid>
						<Grid item>
							<img
								src={mobileAppsIcon}
								alt="Mobile Apps Development"
								width="250em"
							/>
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
						style={{ textAlign: matchesXS && 'center' }}
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
							<Button
								component={Link}
								to="/customsoftware"
								onClick={() => {
									setValue(1);
									setSelectedIndex(1);
								}}
								className={classes.learnMoreBtn}
								variant="outlined"
							>
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
						style={{ textAlign: matchesXS && 'center' }}
					>
						<Grid item style={{ width: !matchesXS && '35em' }}>
							<Typography variant="h4" gutterBottom>
								Website Development
							</Typography>
							<Typography variant="subtitle1">
								Reach More. Discover More. Sell More.
							</Typography>
							<Typography variant="subtitle1" gutterBottom>
								Optimized for Search Engines. Built for Speed.
							</Typography>
							<Button
								component={Link}
								to="/websites"
								onClick={() => {
									setValue(1);
									setSelectedIndex(3);
								}}
								className={classes.learnMoreBtn}
								variant="outlined"
							>
								<span style={{ marginRight: 10 }}>Learn More</span>{' '}
								<ButtonArrow width={15} height={15} fill="red" />
							</Button>
						</Grid>
						<Grid item>
							<img src={websiteIcon} alt="Website Development" width="250em" />
						</Grid>
					</Grid>
				</Container>
			</Grid>
		</Grid>
	);
};

export default Services;
