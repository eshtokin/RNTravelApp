import {View} from 'react-native'
import {Text} from '../../components'
import Colors from '../../utils/Colors'

type ProfileProps = {}
const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.error[300],
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text font="headline" fontWeight={500}>
        Profile
      </Text>
    </View>
  )
}

export default Profile
