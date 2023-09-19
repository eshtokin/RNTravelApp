import Svg, {Path} from 'react-native-svg'
import Colors from '../../../src/utils/Colors'

type CrossIconProps = {color?: string}
const CrossIcon: React.FC<CrossIconProps> = ({color = Colors.black[900]}) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M3.75073 3.75L14.25 14.2493"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.75009 14.2493L14.2494 3.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CrossIcon
