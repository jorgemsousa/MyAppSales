import React from 'react';
import {CardFigure, Logo, FormForgot, Text} from '../../components'
import forgotImage from '../../assets/images/forgot.png';
import {Container, CardHead} from './styles';

const Forgot = () => {
  return (
    <Container>
      <CardHead>       
        <Text size="30px" bold="bold">Esqueceu sua senha?</Text>
      </CardHead>
      <CardFigure image={forgotImage} />
      <FormForgot />
      <Logo width={85} height={85} />
    </Container>
  );
};
export default Forgot;