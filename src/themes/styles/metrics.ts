import {Dimensions, PixelRatio} from 'react-native'
type Tdimension = {
  px: number,
  widthPercent: number;  
}
const {height, width} = Dimensions.get('window')

const figmaWidth = 428

const px = (valuePx) => {
  const widthPercent = (valuePx / figmaWidth) * 100
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100
  )
  return screenPixel
}

export const metrics = {
  px,
}