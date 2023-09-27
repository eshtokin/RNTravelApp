import React from 'react'
import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg'
import Colors from '../../src/utils/Colors'

type DestinationOverlayProps = {color?: string}
const DestinationOverlay: React.FC<DestinationOverlayProps> = ({
  color = Colors.black[300],
}) => {
  return (
    <Svg width="186" height="183" viewBox="0 0 186 183" fill="none">
      <Rect
        width="186.507"
        height="182.727"
        transform="matrix(1 0 0 -1 -0.507812 183)"
        fill="url(#paint0_linear_558_3250)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_558_3250"
          x1="93.2534"
          y1="0"
          x2="93.2534"
          y2="182.727"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} stopOpacity={0.89} />
          <Stop offset="0.642181" stopColor={color} stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default DestinationOverlay
