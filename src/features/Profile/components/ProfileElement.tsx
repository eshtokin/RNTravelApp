import {ReactElement} from 'react'
import {Pressable, StyleSheet} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {Text} from '@components'

type ProfileElementProps = {
  label: string
  icon?: ReactElement
  handler?: () => void
}
const ProfileElement: React.FC<ProfileElementProps> = ({
  label,
  icon,
  handler,
}) => {
  return (
    <Pressable style={styles.container} onPress={handler}>
      <Text font="headline" fontWeight={200}>
        {label}
      </Text>
      {icon}
    </Pressable>
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
