import {AnimatedProps} from 'react-native-reanimated'
import {Path, PathProps} from 'react-native-svg'

type SharedIconProps = {
  color?: string
  animated?: boolean
  animatedProps?: AnimatedProps<Path>
}

export default SharedIconProps
