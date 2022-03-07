import styled from "styled-components/native";

export const CustomInput = styled.TextInput`
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.grey};
    padding: ${({theme}) => theme.metrics.px(10)}px;
    padding-left: ${({theme}) => theme.metrics.px(20)}px;
    border-radius: ${({theme}) => theme.metrics.px(8)}px;
    width: ${({theme}) => theme.metrics.px(403)}px;
    height: ${({theme}) => theme.metrics.px(53)}px;
    font-size: ${({theme}) => theme.metrics.px(24)}px;
    margin: ${({theme}) => theme.metrics.px(10)}px;
`;