import {PropsWithChildren} from 'react'
import {TextProps} from 'react-native'
import Colors from '../utils/Colors'
import Typography from '../utils/Typography'
import Animated from 'react-native-reanimated'
import {SharedValue} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper'

type ColorKeys = keyof typeof Colors

type HeadingWeightVarinats = keyof typeof Typography.heading
type BodyTextWeightVarinats = keyof typeof Typography.bodyText
type HeadlineWeightVarinats = keyof typeof Typography.headline

type FontVariants =
  | {
      font: 'headline'
      fontWeight: HeadlineWeightVarinats
    }
  | {
      font: 'heading'
      fontWeight: HeadingWeightVarinats
    }
  | {
      font: 'bodyText'
      fontWeight: BodyTextWeightVarinats
    }

type ColorWeightKeys = keyof (typeof Colors)[ColorKeys]

type MyTextProps = PropsWithChildren & {
  color?: ColorKeys
  colorWeight?: ColorWeightKeys | keyof (typeof Colors)['black']
  sharedOpacity?: SharedValue<number>
} & FontVariants &
  TextProps

const Text: React.FC<MyTextProps> = ({
  children,
  color = 'black',
  colorWeight = 900,
  font,
  fontWeight,
  sharedOpacity = 1,
  ...textProps
}) => {
  return (
    <Animated.Text
      {...textProps}
      style={[
        textProps.style,
        {
          // @ts-ignore
          ...Typography[font][fontWeight],
          color: Colors[color][colorWeight as ColorWeightKeys],
        },
        {opacity: sharedOpacity},
      ]}>
      {children}
    </Animated.Text>
  )
}

export default Text
