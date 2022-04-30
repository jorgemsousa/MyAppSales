/* eslint-disable prettier/prettier */
import React from 'react';
import Splash from './views/SplashScreen';
import Login from './views/Login';
import Forgot from './views/forgot';
import Register from './views/Register';
import {ThemeProvider} from 'styled-components';
import {theme} from './themes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Splash />
    </ThemeProvider>
  );
};

export default App;
