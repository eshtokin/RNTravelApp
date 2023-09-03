import React from 'react'
import Svg, {Path} from 'react-native-svg'
import Colors from '../../../src/utils/Colors'

type StarIconFilledProps = {
  size: 'small' | 'medium' | 'large'
  filled?: boolean
}
const StarIconFilled: React.FC<StarIconFilledProps> = ({
  filled = false,
  size = 'medium',
}) => {
  const height = 'small' == size ? 12 : 'medium' === size ? 20 : 30
  return (
    <Svg width={height} height={height} viewBox="0 0 12 12" fill="none">
      <Path
        d="M6.86447 1.75507L7.74447 3.51507C7.86447 3.76007 8.18447 3.99507 8.45447 4.04007L10.0495 4.30507C11.0695 4.47507 11.3095 5.21507 10.5745 5.94507L9.33447 7.18507C9.12447 7.39507 9.00947 7.80007 9.07447 8.09007L9.42947 9.62507C9.70947 10.8401 9.06447 11.3101 7.98947 10.6751L6.49447 9.79007C6.22447 9.63007 5.77947 9.63007 5.50447 9.79007L4.00947 10.6751C2.93947 11.3101 2.28947 10.8351 2.56947 9.62507L2.92447 8.09007C2.98947 7.80007 2.87447 7.39507 2.66447 7.18507L1.42447 5.94507C0.694466 5.21507 0.929466 4.47507 1.94947 4.30507L3.54447 4.04007C3.80947 3.99507 4.12947 3.76007 4.24947 3.51507L5.12947 1.75507C5.60947 0.800068 6.38947 0.800068 6.86447 1.75507Z"
        fill={filled ? Colors.brand[500] : Colors.black[100]}
      />
    </Svg>
  )
}

export default StarIconFilled
