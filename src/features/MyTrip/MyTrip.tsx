import {View} from 'react-native'
import Colors from '../../utils/Colors'
import {Text} from '../../components'

type MyTripProps = {}
const MyTrip: React.FC<MyTripProps> = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.information[300],
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text font="headline" fontWeight={500}>
        WishList
      </Text>
    </View>
  )
}

export default MyTrip
