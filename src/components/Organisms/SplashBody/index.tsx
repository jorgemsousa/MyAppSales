import React from 'react';
import { theme } from '../../../themes';
import {Logo, ImageSplash, Text} from '../../Atoms';
import {CardFigure} from '../../Molecules';
import {View} from './styles';

export const SplashBody = () => {
  return (
    <View>
      <ImageSplash />
      <Logo width={142} height={142}/>
      <Text size={theme.metrics.px(24)+'px'} bold="bold">
        Jorge M. Sousa
      </Text>
      <Text size={theme.metrics.px(14)+'px'}>Developed by</Text>
      <Text size={theme.metrics.px(16)+'px'} bold="bold">
        jorgeferartsousa@gmail.com
      </Text>
    </View>
  );
};
