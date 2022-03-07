import styled from 'styled-components/native';
export const View = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: -${({theme}) => theme.metrics.px(700)}px;
`;

