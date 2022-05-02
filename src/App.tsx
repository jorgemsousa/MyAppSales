/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {ThemeProvider} from 'styled-components';
import {theme} from './themes';

import  { Login, Splash, Register, Forgot}  from './views'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='SplashScreen' 
            component={Splash} 
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name='Login' 
            component={Login} 
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name='Register' 
            component={Register} 
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name='Forgot' 
            component={Forgot} 
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
