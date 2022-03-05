import styled from 'styled-components/native';

export const CustomText = styled.Text`
  font-size: ${({size, theme}) => size || theme.metrics.px(16)};
  font-weight: ${({bold}) => bold || 'normal'};
  color: ${({color, theme}) => color || theme.colors.white};
  font-family: ${({theme}) => theme.fonts.regular}
`;
