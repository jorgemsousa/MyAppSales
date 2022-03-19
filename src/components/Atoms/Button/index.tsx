import React from "react";
import {Alert, Button} from  'react-native';
import {CustomButtom} from './styles'
export const Buttom = ({children, width, bgcolor}) => {
  return (
      <CustomButtom width={width} bgcolor={bgcolor}
        onPress={() => Alert.alert('O botão foi pressionado')}
      >{children}</CustomButtom>
  )
}