import React from 'react'
import Svg, {G, Path} from 'react-native-svg'

type BackArrowProps = {}
const BackArrow: React.FC<BackArrowProps> = ({}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G id="vuesax/linear/arrow-left">
        <G id="arrow-left">
          <Path
            id="Vector"
            d="M9.57 5.93005L3.5 12.0001L9.57 18.0701"
            stroke="#0C0507"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            id="Vector_2"
            d="M20.4999 12H3.66992"
            stroke="#0C0507"
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