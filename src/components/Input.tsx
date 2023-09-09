import React, {ReactElement} from 'react'
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native'
import Colors from '../utils/Colors'
import Typography from '../utils/Typography'
import {SecureEye, UnsecureEye} from '../../assets/icons/svg'

type InputProps = {
  label: string
  value: string
  onChageText: (text: string) => void
  error?: string
  secured?: boolean
  rightIcon?: ReactElement
  onRightIconPress?: () => void
}
const Input: React.FC<InputProps> = ({
  label,
  value,
  onChageText,
  error,
  rightIcon,
  onRightIconPress,
  secured = false,
}) => {
  const [isActive, setIsActive] = React.useState(false)
  const [securedField, setSecureField] = React.useState(secured)

  const _onRigthIconPress = () => {
    if (rightIcon) {
      onRightIconPress && onRightIconPress()
      return
    }

    setSecureField(!securedField)
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.labelContainer,
          value.length > 0 && styles.activeLabelContainerPosition,
          isActive && styles.activeLabelContainerPosition,
        ]}>
        <Text style={[styles.label, isActive && styles.activeLabel]}>
          {label}
        </Text>
      </View>
      <TextInput
        secureTextEntry={securedField}
        style={[styles.input, isActive && styles.activeInput]}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onChangeText={onChageText}
        value={value}
      />
      <Pressable style={styles.iconContainer} onPress={_onRigthIconPress}>
        {secured ? (
          securedField ? (
            <SecureEye />
          ) : (
            <UnsecureEye />
          )
        ) : (
          rightIcon && rightIcon
        )}
      </Pressable>
      <View style={styles.errorContainer}>
        {error && (
          <Text style={styles.errorMessage} numberOfLines={1}>
            {error}
          </Text>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {marginTop: 11},
  input: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.black[300],
    borderRadius: 20,
    ...Typography.bodyText[200],
    lineHeight: 22,
    color: Colors.black[900],
    zIndex: 500,
  },
  activeInput: {
    borderColor: Colors.brand[500],
    borderWidth: 1,
  },
  labelContainer: {
    position: 'absolute',
    left: 20,
    top: 8,
    zIndex: 0,
    backgroundColor: Colors.black[0],
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  activeLabelContainerPosition: {
    left: 20,
    top: -15,
    zIndex: 1000,
  },
  label: {
    ...Typography.bodyText[200],
    color: Colors.black[300],
  },
  activeLabel: {
    ...Typography.headline[100],
    color: Colors.brand[500],
  },
  placeholder: {
    ...Typography.bodyText[200],
    color: Colors.black[300],
  },
  iconContainer: {
    padding: 10,
    position: 'absolute',
    right: 15,
    top: 5,
    zIndex: 1000,
  },
  errorContainer: {
    justifyContent: 'center',
    height: 16,
    marginHorizontal: 25,
  },
  errorMessage: {
    ...Typography.headline[300],
    color: Colors.error[300],
  },
})

export default Input
