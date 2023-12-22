import {useRef, useState} from 'react'
import {
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  TextInputProps,
  View,
} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import Colors from '../utils/Colors'
import {SecureEye, UnsecureEye} from '../../assets/icons/svg'

type InputProps = {
  label: string
  value: string
  error?: string
  onChangeText: (text: string) => void
} & TextInputProps
const Input: React.FC<InputProps> = ({
  label,
  value,
  error,
  onChangeText,
  secureTextEntry,
  ...props
}) => {
  const inputRef = useRef<TextInput>(null)
  const [isInputActive, setIsInputActive] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry)
  const activeCondition = value.length > 0 || isInputActive

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => inputRef.current?.focus()}
        style={[
          styles.labelContainer,
          activeCondition && styles.activeLabelContainer,
        ]}>
        <Text style={[styles.label, activeCondition && styles.activeLabel]}>
          {label}
        </Text>
      </Pressable>
      <TextInput
        ref={inputRef}
        style={[styles.input, activeCondition && styles.activeInput]}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => {
          LayoutAnimation.easeInEaseOut()
          setIsInputActive(true)
        }}
        onBlur={() => {
          LayoutAnimation.easeInEaseOut()
          setIsInputActive(false)
        }}
        onGestureEvent={() => setIsInputActive(false)}
        secureTextEntry={isPasswordVisible}
        autoCapitalize="none"
        {...props}
      />
      {secureTextEntry && (
        <Pressable
          style={styles.secureIconWrapper}
          onPress={() => setIsPasswordVisible(flag => !flag)}>
          {isPasswordVisible ? <SecureEye /> : <UnsecureEye />}
        </Pressable>
      )}
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
  },
  labelContainer: {
    position: 'absolute',
    top: 22 - 5,
    padding: 5,
    marginLeft: 20,
    backgroundColor: Colors.black[0],
    zIndex: 999,
  },
  label: {color: Colors.black[300]},
  activeLabel: {color: Colors.brand[500]},
  activeLabelContainer: {
    top: -8,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 17,

    marginVertical: 5,

    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.black[200],

    backgroundColor: Colors.black[0],
    color: Colors.black[900],
    fontSize: 16,
  },
  activeInput: {
    borderColor: Colors.brand[500],
  },
  error: {marginLeft: 20, color: Colors.error[500], fontSize: 12},
  secureIconWrapper: {
    position: 'absolute',
    top: 18,
    right: 20,
  },
})

export default Input
