import Svg, {Circle, Path} from 'react-native-svg'
import Colors from '../../../src/utils/Colors'

type FacebookeIconProps = {
  color?: string
  foregroundColor?: string
}
const FacebookeIcon: React.FC<FacebookeIconProps> = ({
  color = Colors.black[900],
  foregroundColor = Colors.black[100],
}) => {
  return (
    <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
      <Circle cx="21" cy="21" r="21" fill={foregroundColor} />
      <Path
        d="M25.6484 22.25L26.1953 18.6562H22.7188V16.3125C22.7188 15.2969 23.1875 14.3594 24.75 14.3594H26.3516V11.2734C26.3516 11.2734 24.9062 11 23.5391 11C20.6875 11 18.8125 12.7578 18.8125 15.8828V18.6562H15.6094V22.25H18.8125V31H22.7188V22.25H25.6484Z"
        fill={color}
      />
    </Svg>
  )
}

export default FacebookeIcon
