import styled from "styled-components/native";

export const Card = styled.View`  
  background: ${({theme}) => theme.colors.white};
  padding: ${({theme}) => theme.metrics.px(20)}px;
  margin-top: -${({theme}) => theme.metrics.px(100)}px;
  margin-bottom: ${({theme}) => theme.metrics.px(44)}px;
  border-radius: ${({theme}) => theme.metrics.px(8)}px;
  width: ${({theme}) => theme.metrics.px(403)}px
`;

export const Image = styled.Image`
  width: ${({theme}) => theme.metrics.px(350)}px
  height: ${({theme}) => theme.metrics.px(206)}px
`;