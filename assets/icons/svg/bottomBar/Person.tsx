import Svg, {Path} from 'react-native-svg'
import Colors from '../../../../src/utils/Colors'

type PersonProps = {
  color?: string
}
const Person: React.FC<PersonProps> = ({color = Colors.black[900]}) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M12.725 10.87C12.625 10.86 12.505 10.86 12.395 10.87C10.015 10.79 8.125 8.84 8.125 6.44C8.125 3.99 10.105 2 12.565 2C15.015 2 17.005 3.99 17.005 6.44C16.995 8.84 15.105 10.79 12.725 10.87Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.72491 14.56C5.30491 16.18 5.30491 18.82 7.72491 20.43C10.4749 22.27 14.9849 22.27 17.7349 20.43C20.1549 18.81 20.1549 16.17 17.7349 14.56C14.9949 12.73 10.4849 12.73 7.72491 14.56Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Person
