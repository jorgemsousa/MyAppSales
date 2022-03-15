import React from "react";
import {Buttom, Text, Input} from '../../Atoms'

import {Container, Row} from './styles'
export const FormSignIn = () => {
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
      <Text size="18px">
        Esqueci a Senha
      </Text>
      <Text size="18px">
        Novo Cadastro
      </Text>
      </Row>
    </Container>
  )
}