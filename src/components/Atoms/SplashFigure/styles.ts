/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const SplashImage = styled.Image`
    width: ${({theme}) => theme.metrics.px(380)}px;
    height: ${({theme}) => theme.metrics.px(376)}px;
    margin-bottom: ${({theme}) => theme.metrics.px(230)}px;
`;