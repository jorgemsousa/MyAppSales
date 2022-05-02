import React from 'react';
import {CardFigure, Logo, FormSignIn, Text} from '../../components'
import loginImage from '../../assets/images/ImageLogin.png';
import {Container, CardHead} from './styles';

 export const Login = ({ navigation }) => {
  return (
    <Container>
      <CardHead>       
        <Text size="30px" bold="bold">Faça seu Login</Text>
      </CardHead>
      <CardFigure image={loginImage} />
      <FormSignIn navigation={navigation}/>
      <Logo width={85} height={85} />
    </Container>
  );
};