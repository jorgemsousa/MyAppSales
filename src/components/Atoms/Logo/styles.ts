/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const ImageLogo = styled.Image`
    width: ${({width, theme}) => width || theme.metrics.px(142)}px;
    height: ${({height, theme}) => height || theme.metrics.px(142)}px;
`;

