import {Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {Colors} from '@utils'

const GRADIENT_COLORS = [
  Colors.black[400],
  // Colors.black[200],
  // Colors.black[100],
  Colors.black.transparent,
  Colors.black.transparent,
  Colors.black.transparent,
  // Colors.black[300],
  Colors.black[400],
  Colors.black[500],
  Colors.black[600],
  // Colors.black[700],
  Colors.black[800],
  Colors.black[900],
]
const {height: SCREEN_HEIGHT} = Dimensions.get('window')
const ProductOverlay: React.FC<{}> = () => {
  return (
    <LinearGradient
      colors={GRADIENT_COLORS}
      style={{
        padding: 20,
        height: SCREEN_HEIGHT,
        width: '100%',
        opacity: 0.6,
      }}
    />
  )
}

export default ProductOverlay
