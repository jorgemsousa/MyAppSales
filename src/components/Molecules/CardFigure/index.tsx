import React from "react";
import {Card, Image} from './styles';

export const CardFigure = ({image}) => {
    return(
      <Card>
        <Image source={image}/>
      </Card>
    )
}