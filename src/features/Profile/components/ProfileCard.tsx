import {Image, StyleSheet, View} from 'react-native'
import {Text} from '../../../components'
import Colors from '../../../utils/Colors'
import {avatar1} from './../../../../assets/images'

type ProfileCardProps = {}
const ProfileCard: React.FC<ProfileCardProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Image source={avatar1} style={styles.image} />
      <View>
        <Text font="headline" fontWeight={400}>
          Hello, Pristia
        </Text>
        <Text font="bodyText" fontWeight={100}>
          Semarang, Indonesia
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', gap: 20},
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: Colors.black[200],
  },
})

export default ProfileCard
