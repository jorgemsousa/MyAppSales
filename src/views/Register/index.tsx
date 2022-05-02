import React from 'react';
import {CardFigure, Logo, FormRegister, Text} from '../../components'
import registerImage from '../../assets/images/register.png';
import {Container, CardHead} from './styles';

export const Register = ({ navigation }) => {
  return (
    <Container>
      <CardHead>       
        <Text size="30px" bold="bold">Cadastre-se é grátis</Text>
      </CardHead>
      <CardFigure image={registerImage} />
      <FormRegister navigation={navigation} />
      <Logo width={85} height={85} />
    </Container>
  );
};