import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import Colors from '../utils/Colors'
import Typography from '../utils/Typography'

type ButtonStyleKey = keyof typeof styles
type ButtonProps = {
  type: 'primary' | 'secondary' | 'minimal'
  icon: 'icon-left' | 'icon-right' | 'icon-only' | 'label-only'
  iconSource?: ImageSourcePropType
  size: 'small' | 'medium' | 'large'
  disabled?: boolean
  label?: String
  onPress: () => void
  addStyles?: ViewStyle
}
const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  icon = 'label-only',
  iconSource,
  size = 'medium',
  disabled = false,
  label,
  onPress,
  addStyles,
}) => {
  const [buttonState, setButtonState] = React.useState<
    'pressed' | 'disabled' | ''
  >(disabled ? 'disabled' : '')

  const containerSize = (size + 'Container') as ButtonStyleKey
  const containerType = (type + 'Container') as ButtonStyleKey
  const disabledStyleKey = (containerType + 'Disabled') as ButtonStyleKey
  const pressedStyleKey = (containerType + 'Pressed') as ButtonStyleKey

  const labelSizeKey = (size + 'Label') as ButtonStyleKey
  const labelTypeKey = (type + 'Label' + buttonState) as ButtonStyleKey

  const containerSizeForIconOnly = (containerSize +
    'IconOnly') as ButtonStyleKey

  const setButtonPressed = () => setButtonState('pressed')
  const resetButtonState = () => setButtonState('')
  return (
    <Pressable
      disabled={disabled}
      onPressIn={setButtonPressed}
      onPress={onPress}
      onPressOut={resetButtonState}
      style={[
        styles.container,
        styles[containerSize] as ViewStyle,
        styles[containerType] as ViewStyle,
        addStyles,
        'pressed' === buttonState && (styles[pressedStyleKey] as ViewStyle),
        'disabled' === buttonState && (styles[disabledStyleKey] as ViewStyle),
        icon === 'icon-only' && (containerSizeForIconOnly as ViewStyle),
      ]}>
      {'icon-left' === icon && <View style={styles.iconSize} />}
      {'icon-only' === icon ? (
        iconSource && <Image source={iconSource} style={styles.iconSize} />
      ) : (
        <Text style={[styles[labelSizeKey], styles[labelTypeKey]]}>
          {label}
        </Text>
      )}
      {'icon-right' === icon && <View style={styles.iconSize} />}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // type: primary
  primaryContainer: {
    backgroundColor: Colors.brand[500],
  },
  primaryLabel: {
    color: Colors.black[900],
  },
  primaryContainerDisabled: {
    opacity: 0.4,
  },
  primaryContainerPressed: {
    backgroundColor: Colors.brand[700],
  },

  // type: secondary
  secondaryContainer: {
    borderWidth: 1,
    borderColor: Colors.black[200],
    backgroundColor: Colors.black[0],
  },
  secondaryLabel: {color: Colors.black[400]},
  secondaryContainerDisabled: {
    opacity: 0.4,
    borderColor: Colors.black[100],
    backgroundColor: Colors.black[0],
  },
  secondaryLabelDisabled: {
    color: Colors.black[300],
  },
  secondaryContainerPressed: {
    backgroundColor: Colors.black[100],
    borderColor: Colors.black[200],
    borderWidth: 1,
  },
  secondaryLabelPressed: {
    color: Colors.black[900],
  },

  // type: minimal
  minimalLabel: {
    color: Colors.black[400],
  },
  minimalContainerPressed: {
    backgroundColor: Colors.black[100],
  },
  minimalLabelPressed: {
    color: Colors.black[900],
  },
  minimalLabelDisabled: {
    color: Colors.black[300],
  },

  // size: small
  smallContainer: {
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
  smallContainerIconOnly: {
    padding: 8,
  },
  smallLabel: {
    ...Typography.heading[100],
  },

  // size: medium
  mediumContainer: {
    paddingVertical: 9,
    paddingHorizontal: 16,
  },
  mediumContainerIconOnly: {
    padding: 12,
  },
  mediumLabel: {
    ...Typography.headline[100],
  },

  // size: large
  largeContainer: {
    paddingVertical: 13,
    paddingHorizontal: 24,
  },
  largeContainerIconOnly: {
    padding: 16,
  },
  largeLabel: {
    ...Typography.headline[300],
  },

  iconSize: {
    width: 16,
    height: 16,
    // delete after add icons
    backgroundColor: Colors.information[300],
  },
})

export default Button
