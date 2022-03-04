import React from 'react';
import {Logo, ImageSplash, Text} from '../../Atoms';
import {View} from './styles';

export const SplashBody = () => {
  return (
    <View>
      <ImageSplash />
      <Logo />
      <Text size="24px" bold="bold" color="#FFFFFF">
        Jorge M. Sousa
      </Text>
      <Text size="14px">Developed by</Text>
      <Text size="16px" bold="bold">
        jorgeferartsousa@gmail.com
      </Text>
    </View>
  );
};
