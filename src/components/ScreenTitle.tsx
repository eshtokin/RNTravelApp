import {TextStyle} from 'react-native'
import Text from './Text'

type ScreenTitleProps = {title: string; style?: TextStyle}
const ScreenTitle: React.FC<ScreenTitleProps> = ({title, style}) => {
  return (
    <Text font="headline" fontWeight={700} style={style}>
      {title}
    </Text>
  )
}

export default ScreenTitle
