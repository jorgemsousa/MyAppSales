import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background: ${({theme}) => theme.colors.primary_blue};
    flex-direction: column;
`;

export const CardHead = styled.View`
  background: ${({theme}) => theme.colors.primary_blue_dark};
  width: 100%;
  height: 200px;
`;