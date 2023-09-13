import {View} from 'react-native'
import {Text} from '../../components'
import Colors from '../../utils/Colors'

type WishListProps = {}
const WishList: React.FC<WishListProps> = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.brand[300],
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text font="headline" fontWeight={500}>
        WishList
      </Text>
    </View>
  )
}

export default WishList
