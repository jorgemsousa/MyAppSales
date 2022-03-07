/* eslint-disable prettier/prettier */
import React from 'react';
import logoImage from '../../../assets/images/logo.png';
import { ImageLogo } from './styles';

export const Logo = ({width, height}) => (
    <ImageLogo source={logoImage} width={width} height={height} />
)
