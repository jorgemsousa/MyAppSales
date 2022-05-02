import React from "react";
import { TouchableOpacity } from 'react-native'
import {Buttom, Text, Input} from '../../Atoms'

import {Container, Row} from './styles'
export const FormSignIn = (props) => {

   return (
    <Container>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Buttom>
        <Text 
          size="24px" 
          bold="bold"
        >
          Acessar
        </Text>
      </Buttom>
      <Row>
      <TouchableOpacity onPress={() => props.navigation.navigate('Forgot')}>
        <Text size="18px">
          Esqueci a Senha
        </Text>        
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
        <Text size="18px">
          Novo Cadastro
        </Text>
      </TouchableOpacity>

      </Row>
    </Container>
  )
}