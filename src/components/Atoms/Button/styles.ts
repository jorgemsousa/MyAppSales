import styled from "styled-components/native";
import { Buttom } from ".";
import { theme } from "../../../themes";

export const CustomButtom = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: ${({theme, width}) => theme.metrics.px(width) || theme.metrics.px(259)}px;
    height: ${({theme}) => theme.metrics.px(53)}px;
    background: ${({theme, bgcolor}) => bgcolor || theme.colors.secondary_blue};
    margin-top: ${({theme}) => theme.metrics.px(20)}px;
    margin-bottom: ${({theme}) => theme.metrics.px(20)}px;
    border-radius: ${({theme}) => theme.metrics.px(8)}px;
`; 