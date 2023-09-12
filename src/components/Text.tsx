import {PropsWithChildren} from 'react'
import {Text as RNText, TextStyle, TextProps} from 'react-native'
import Colors from '../utils/Colors'
import Typography from '../utils/Typography'

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

type MyTextProps = PropsWithChildren & {
  color?: ColorKeys
  colorWeight?: keyof (typeof Colors)[ColorKeys]
} & FontVariants &
  TextProps

const Text: React.FC<MyTextProps> = ({
  children,
  color = 'black',
  colorWeight = 900,
  font,
  fontWeight,
  ...textProps
}) => {
  return (
    <RNText
      {...textProps}
      style={[
        textProps.style,
        {
          // @ts-ignore
          ...Typography[font][fontWeight],
          color: Colors[color][colorWeight],
        },
      ]}>
      {children}
    </RNText>
  )
}

export default Text
