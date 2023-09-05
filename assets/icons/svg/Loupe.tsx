import React from 'react'
import Svg, {Path} from 'react-native-svg'

type LoupeIconProps = {}
const LoupeIcon: React.FC<LoupeIconProps> = ({}) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.58366 17.5C13.9559 17.5 17.5003 13.9556 17.5003 9.58335C17.5003 5.2111 13.9559 1.66669 9.58366 1.66669C5.2114 1.66669 1.66699 5.2111 1.66699 9.58335C1.66699 13.9556 5.2114 17.5 9.58366 17.5Z"
        stroke="#0C0507"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3337 18.3334L16.667 16.6667"
        stroke="#0C0507"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LoupeIcon
