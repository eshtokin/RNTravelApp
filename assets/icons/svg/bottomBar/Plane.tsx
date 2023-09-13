import Svg, {Path} from 'react-native-svg'
import Colors from '../../../../src/utils/Colors'

type PlaneProps = {color?: string}
const Plane: React.FC<PlaneProps> = ({color = Colors.black[900]}) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M7.96487 6.31991L16.4549 3.48991C20.2649 2.21991 22.3349 4.29991 21.0749 8.10991L18.2449 16.5999C16.3449 22.3099 13.2249 22.3099 11.3249 16.5999L10.4849 14.0799L7.96487 13.2399C2.25487 11.3399 2.25487 8.22991 7.96487 6.31991Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.675 13.6501L14.255 10.0601"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Plane