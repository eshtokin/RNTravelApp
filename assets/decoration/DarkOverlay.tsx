import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg'

type DarkOverlayProps = {
  width?: number
  height?: number
}
const DarkOverlay: React.FC<DarkOverlayProps> = ({
  width = 375,
  height = 623,
}) => {
  return (
    <Svg width={width} height="623" viewBox={`0 0 375 ${width}`} fill="none">
      <Rect
        width="375"
        height="623"
        transform="matrix(1 0 0 -1 0 623)"
        fill="url(#paint0_linear_521_2558)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_521_2558"
          x1="187.5"
          y1="0"
          x2="187.5"
          y2="623"
          gradientUnits="userSpaceOnUse">
          <Stop stopOpacity="0.89" />
          <Stop offset="1" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default DarkOverlay
