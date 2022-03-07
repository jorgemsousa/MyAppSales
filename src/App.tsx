/* eslint-disable prettier/prettier */
import React from 'react';
import Splash from './views/SplashScreen';
import Login from './views/Login';
import {ThemeProvider} from 'styled-components';
import {theme} from './themes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
