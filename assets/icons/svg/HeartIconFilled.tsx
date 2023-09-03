import React from 'react'
import Svg, {Path} from 'react-native-svg'
import Colors from '../../../src/utils/Colors'

type HeartIconFilledProps = {
  color?: string
}
const HeartIconFilled: React.FC<HeartIconFilledProps> = ({
  color = Colors.error[500],
}) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M13.7003 2.58337C12.192 2.58337 10.842 3.31671 10.0003 4.44171C9.15866 3.31671 7.80866 2.58337 6.30033 2.58337C3.74199 2.58337 1.66699 4.66671 1.66699 7.24171C1.66699 8.23337 1.82533 9.15004 2.10033 10C3.41699 14.1667 7.47533 16.6584 9.48366 17.3417C9.76699 17.4417 10.2337 17.4417 10.517 17.3417C12.5253 16.6584 16.5837 14.1667 17.9003 10C18.1753 9.15004 18.3337 8.23337 18.3337 7.24171C18.3337 4.66671 16.2587 2.58337 13.7003 2.58337Z"
        fill={color}
      />
    </Svg>
  )
}
export default HeartIconFilled