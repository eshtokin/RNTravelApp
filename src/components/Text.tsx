import {PropsWithChildren} from 'react'
import {Text as RNText} from 'react-native'
import Colors from '../utils/Colors'
import Typography from '../utils/Typography'

type TextProps = PropsWithChildren & {
  color: keyof typeof Colors
  colorWeight: keyof typeof Colors.black
}
const Text: React.FC<TextProps> = ({children, color, colorWeight}) => {
  return <RNText style={[{}]}>{children}</RNText>
}

export default Text
