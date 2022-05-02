/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../views/SplashScreen'

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={SplashScreen} />
      </NavigationContainer>
  );
};

export default Routes;
