import React from "react";
import {Buttom, Text, Input} from '../../Atoms'

import {Container} from './styles'
export const FormForgot = (props) => {
  return (
    <Container>
      <Input placeholder="E-mail" />
      <Input placeholder="Usuário" />
      <Buttom onPress={() => props.navigation.goBack()}>
        <Text 
          size="24px" 
          bold="bold"
        >
          Recuperar
        </Text>
      </Buttom>
    </Container>
  )
}