import React from "react";
import {Buttom, Text, Input} from '../../Atoms'

import {Container, Row} from './styles'

export const FormRegister = (props) => {
  return (
    <Container>
      <Input placeholder="Usuário" />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Input placeholder="Repitir Senha" />
      <Row>
        <Buttom width={150}>
          <Text 
            size="20px" 
            bold="bold"
          >
            Cadastrar
          </Text>
        </Buttom>
        <Buttom width={150} bgcolor="#CACACA" onPress={() => props.navigation.goBack()}>
          <Text 
            size="20px" 
            bold="bold"
          >
            Cancelar
          </Text>
        </Buttom>
      </Row>
    </Container>
  )
}