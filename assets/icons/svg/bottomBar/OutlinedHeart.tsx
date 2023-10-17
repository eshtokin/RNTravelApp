import Svg, {Path} from 'react-native-svg'
import Colors from '../../../../src/utils/Colors'
import Animated from 'react-native-reanimated'
import SharedIconProps from '../../../../src/types/SharedIconProps'

const APath = Animated.createAnimatedComponent(Path)
type OutlinedHeartProps = SharedIconProps & {size?: number}
const OutlinedHeart: React.FC<OutlinedHeartProps> = ({
  color = Colors.black[900],
  size = 24,
  animatedProps,
}) => {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <APath
        d="M13.1849 20.8101C12.8449 20.9301 12.2849 20.9301 11.9449 20.8101C9.04494 19.8201 2.56494 15.6901 2.56494 8.6901C2.56494 5.6001 5.05494 3.1001 8.12494 3.1001C9.94494 3.1001 11.5549 3.9801 12.5649 5.3401C13.5749 3.9801 15.1949 3.1001 17.0049 3.1001C20.0749 3.1001 22.5649 5.6001 22.5649 8.6901C22.5649 15.6901 16.0849 19.8201 13.1849 20.8101Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animatedProps={animatedProps}
      />
    </Svg>
  )
}

export default OutlinedHeart
