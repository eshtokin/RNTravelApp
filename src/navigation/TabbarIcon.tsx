import {JSXElementConstructor} from 'react'
import {Pressable, StyleSheet} from 'react-native'
import Colors from '../utils/Colors'
import {Text} from '../components'

type TabbarIconProps = {
  active?: boolean
  label: string
  Icon: JSXElementConstructor<{color: string}>
  onPress: () => void
}
const TabbarIcon: React.FC<TabbarIconProps> = ({
  active,
  label,
  Icon,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, active && styles.activeContainer]}>
      <Icon color={active ? Colors.black[0] : Colors.black[900]} />
      {active && (
        <Text font="headline" fontWeight={300} color="black" colorWeight={100}>
          {label}
        </Text>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.black[0],
  },
  activeContainer: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    gap: 10,
    backgroundColor: Colors.black[900],
  },
})

export default TabbarIcon
