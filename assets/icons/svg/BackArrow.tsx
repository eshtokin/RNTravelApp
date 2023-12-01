import React from 'react'
import Svg, {G, Path} from 'react-native-svg'
import Colors from '../../../src/utils/Colors'

type BackArrowProps = {
  color?: string
  size?: number
}
const BackArrow: React.FC<BackArrowProps> = ({
  color = Colors.black[0],
  size = 24,
}) => {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <G id="vuesax/linear/arrow-left">
        <G id="arrow-left">
          <Path
            id="Vector"
            d="M9.57 5.93005L3.5 12.0001L9.57 18.0701"
            stroke={color}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            id="Vector_2"
            d="M20.4999 12H3.66992"
            stroke={color}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
    </Svg>
  )
}

export default BackArrow
