import React, { useEffect } from 'react';
import {SplashBody} from '../../components';
import BgImage from '../../assets/images/bgBase.svg';
import {Container} from './styles';

export const Splash = ({ navigation }) => {
  const redirect = () => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 5000)
  }

  useEffect(()=>{
    redirect();
  }, [])

  return (
    <Container>
      <BgImage />
      <SplashBody />
    </Container>
  );
};

