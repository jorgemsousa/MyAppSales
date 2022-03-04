import styled from 'styled-components/native';

export const CustomText = styled.Text`
  font-size: ${({size}) => size || '24px'};
  font-weight: ${({bold}) => bold || 'normal'};
  color: ${({color}) => color || '#FFFFFF'};
`;
