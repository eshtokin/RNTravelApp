import React from 'react'
import {
  Pressable,
  StyleSheet,
  Switch as RNSwitch,
  View,
  LayoutAnimation,
} from 'react-native'
import Colors from '../utils/Colors'

type SwitchProps = {
  value: boolean
  onToggle: (flag: boolean) => void
}
const Switch: React.FC<SwitchProps> = ({value, onToggle}) => {
  const [isOn, setIsOn] = React.useState(value)
  const toggleSwitch = () => {
    LayoutAnimation.easeInEaseOut()
    const newState = !isOn
    setIsOn(newState)
    onToggle(newState)
  }

  return (
    <Pressable style={styles.container} onPress={toggleSwitch}>
      <View style={[styles.circle, isOn && styles.activeCircle]} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    width: 55,
    height: 30,
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.black[200],
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.black[200],
  },
  activeCircle: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.black[900],
  },
})
export default Switch
