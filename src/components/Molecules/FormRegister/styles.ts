import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  flex-direction: column;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${({theme}) => theme.metrics.px(400)}px;
`;