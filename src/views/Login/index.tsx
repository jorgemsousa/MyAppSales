import React from 'react';
import {CardFigure, Logo, FormSignIn} from '../../components'
import loginImage from '../../assets/images/ImageLogin.png';
import {Container, CardHead} from './styles';

const Login = () => {
  return (
    <Container>
      <CardHead />
      <CardFigure image={loginImage} />
      <FormSignIn />
      <Logo width={85} height={85} />
    </Container>
  );
};
export default Login;