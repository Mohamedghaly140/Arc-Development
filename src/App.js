import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components Import
import theme from './components/ui/Themes/Theme';
import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route path='/services' component={() => <div>services</div>} />
          <Route path='/customsoftware' component={() => <div>customsoftware</div>} />
          <Route path='/mobileapps' component={() => <div>mobileapps</div>} />
          <Route path='/websites' component={() => <div>websites</div>} />
          <Route path='/revolution' component={() => <div>revolution</div>} />
          <Route path='/about' component={() => <div>about</div>} />
          <Route path='/contact' component={() => <div>contact</div>} />
          <Route path='/estimate' component={() => <div>estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
