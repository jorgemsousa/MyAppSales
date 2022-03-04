import React from 'react';

import {CustomText} from './styles';

export const Text = ({children, size, color, bold}) => {
  return (
    <CustomText size={size} bold={bold} color={color}>
      {children}
    </CustomText>
  );
};
