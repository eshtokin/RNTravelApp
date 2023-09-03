import React from 'react'
import Svg, {Path} from 'react-native-svg'
import Colors from '../../../src/utils/Colors'

type HeartIconOutlinedProps = {color?: string}
const HeartIconOutlined: React.FC<HeartIconOutlinedProps> = ({
  color = Colors.black[300],
}) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.517 17.3417C10.2337 17.4417 9.76699 17.4417 9.48366 17.3417C7.06699 16.5167 1.66699 13.075 1.66699 7.24171C1.66699 4.66671 3.74199 2.58337 6.30033 2.58337C7.81699 2.58337 9.15866 3.31671 10.0003 4.45004C10.842 3.31671 12.192 2.58337 13.7003 2.58337C16.2587 2.58337 18.3337 4.66671 18.3337 7.24171C18.3337 13.075 12.9337 16.5167 10.517 17.3417Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HeartIconOutlined
