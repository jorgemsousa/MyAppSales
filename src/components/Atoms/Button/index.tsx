import React from "react";
import {Alert, Button} from  'react-native';
import {CustomButtom} from './styles'
export const Buttom = ({children, width, bgcolor, onPress}) => {
  return (
      <CustomButtom 
        width={width} 
        bgcolor={bgcolor}
        onPress={onPress}
      >
        {children}
      </CustomButtom>
  )
}