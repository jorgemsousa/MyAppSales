import React from 'react';
import LottieView from 'lottie-react-native'
import { theme } from '../../../themes';
import {Logo, ImageSplash, Text} from '../../Atoms';
import {CardFigure} from '../../Molecules';
import {View} from './styles';

export const SplashBody = () => {
  return (
    <View>
      <ImageSplash />
        <LottieView 
          source={require('../../../assets/images/animation.json')}
          autoPlay={true}
          loop={true}
          style={{
            position: `absolute`,
            top: 150,  
            width: 500,         
          }}
        />
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
