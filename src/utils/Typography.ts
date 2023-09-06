import {StyleSheet} from 'react-native'

const fontWeight = StyleSheet.create({
  thin: {fontWeight: '100'},
  extraLight: {fontWeight: '200'},
  light: {fontWeight: '300'},
  regular: {fontWeight: '400'},
  medium: {fontWeight: '500'},
  semiBold: {fontWeight: '600'},
  bold: {fontWeight: '700'},
  extraBold: {fontWeight: '800'},
  black: {fontWeight: '900'},
})

const heading = StyleSheet.create({
  200: {
    fontSize: 12,
    lineHeight: 16,
    ...fontWeight.semiBold,
  },
  100: {
    fontSize: 10,
    lineHeight: 16,
    ...fontWeight.medium,
  },
})

const bodyText = StyleSheet.create({
  300: {
    fontSize: 16,
    lineHeight: 26, // 24
    ...fontWeight.regular,
  },
  200: {
    fontSize: 14,
    lineHeight: 24,
    ...fontWeight.regular,
  },
  100: {
    fontSize: 12,
    lineHeight: 24,
    ...fontWeight.regular,
  },
})

const headline = StyleSheet.create({
  900: {
    fontSize: 48,
    lineHeight: 56,
    ...fontWeight.bold,
  },
  800: {
    fontSize: 32,
    lineHeight: 36,
    ...fontWeight.semiBold,
  },
  700: {
    fontSize: 20,
    lineHeight: 24,
    ...fontWeight.semiBold,
  },
  600: {
    fontSize: 20,
    lineHeight: 24,
    ...fontWeight.semiBold,
  },
  500: {
    fontSize: 16,
    lineHeight: 18,
    ...fontWeight.semiBold,
  },
  400: {
    fontSize: 14,
    lineHeight: 16,
    ...fontWeight.medium,
  },
  300: {
    fontSize: 16,
    lineHeight: 26,
    // fontSize: 12,
    // lineHeight: 16,
    ...fontWeight.medium,
  },
  200: {
    fontSize: 14,
    lineHeight: 24,
    ...fontWeight.medium,
  },
  100: {
    fontSize: 12,
    lineHeight: 25,
    ...fontWeight.medium,
  },
})

const Typography = {
  heading,
  bodyText,
  headline,
}

export default Typography
