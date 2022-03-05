/* eslint-disable prettier/prettier */
import React from 'react';
import Splash from './views/SplashScreen';
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
