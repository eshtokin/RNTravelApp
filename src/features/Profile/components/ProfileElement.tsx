import {StyleSheet, View} from 'react-native'
import {Text} from '../../../components'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {ReactElement} from 'react'

type ProfileElementProps = {
  label: string
  icon?: ReactElement
}
const ProfileElement: React.FC<ProfileElementProps> = ({label, icon}) => {
  return (
    <View style={styles.container}>
      <Text font="headline" fontWeight={200}>
        {label}
      </Text>
      {icon}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.black[200],
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default ProfileElement
