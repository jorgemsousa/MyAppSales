import React from "react";
import {Buttom, Text, Input} from '../../Atoms'

import {Container, Row} from './styles'
export const FormForgot = () => {
  return (
    <Container>
      <Input placeholder="E-mail" />
      <Input placeholder="Usuário" />
      <Buttom>
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