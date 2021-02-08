import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';
const arcGray = '#868686';

export default createMuiTheme({
	palette: {
		common: {
			blue: arcBlue,
			orange: arcOrange,
		},
		primary: {
			main: arcBlue,
		},
		secondary: {
			main: arcOrange,
		},
	},
	typography: {
		tab: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			textTransform: 'capitalize',
			fontSize: '1rem',
			color: '#fff',
		},
		estimate: {
			fontFamily: 'Pacifico',
			textTransform: 'capitalize',
			fontSize: '1rem',
			color: '#fff',
		},
		h2: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '2.5rem',
			color: arcBlue,
			lineHeight: 1.5,
		},
		h3: {
			fontFamily: 'Pacifico',
			fontSize: '2.5rem',
			color: arcBlue,
		},
		h4: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '1.75rem',
			color: arcBlue,
		},
		subtitle1: {
			fontWeight: 300,
			fontSize: '1.25rem',
			color: arcGray,
		},
		subtitle2: {
			fontWeight: 300,
			fontSize: '1.25rem',
			color: '#fff',
		},
		body1: {
			fontSize: '1.25rem',
			color: arcGray,
			fontWeight: 300,
		},
		learnButton: {
			borderColor: arcBlue,
			color: arcBlue,
			borderWidth: 2,
			textTransform: 'none',
			borderRadius: 50,
			fontFamily: 'Raleway',
			fontWeight: 'bold',
		},
	},
});
