import React from 'react';
import {SplashBody} from '../../components';
import BgImage from '../../assets/bgBase.svg';
import {Container} from './styles';

const Splash = () => {
  return (
    <Container>
      <BgImage />
      <SplashBody />
    </Container>
  );
};

export default Splash;
