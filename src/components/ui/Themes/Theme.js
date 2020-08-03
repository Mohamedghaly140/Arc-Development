import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      textTransform: 'capitalize',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      textTransform: 'capitalize',
      fontSize: '1rem',
      color: '#fff',
    },
  },
});
