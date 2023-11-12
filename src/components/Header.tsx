import React, {ReactElement} from 'react'
import {Pressable, StyleSheet, Text, View, useAnimatedValue} from 'react-native'
import Typography from '../utils/Typography'
import Colors from '../utils/Colors'
import {BackArrow} from '../../assets/icons/svg'
import {useNavigation} from '@react-navigation/native'

type HeaderProps = {
  withBackIcon?: boolean
  RightIcon?: ReactElement
  onRightIconPress?: () => void
  onSearchIconPress?: () => void
  title?: string
  transparent?: boolean
  withoutTitle?: boolean
  blackIconColor?: string
}
const Header: React.FC<HeaderProps> = ({
  transparent = false,
  withBackIcon = false,
  title = 'Travel',
  onRightIconPress,
  withoutTitle,
  RightIcon,
  blackIconColor = Colors.black[0],
}) => {
  const navigation = useNavigation()
  const goBack = () => navigation.canGoBack() && navigation.goBack()
  return (
    <View
      style={[styles.container, transparent && styles.transparentContainer]}>
      <Pressable style={styles.leftIconContainer} onPress={goBack}>
        {withBackIcon && <BackArrow color={blackIconColor} />}
      </Pressable>
      {!withoutTitle && <Text style={styles.headerTitle}>{title}</Text>}
      <View style={styles.rightIconContainer}>
        {RightIcon && onRightIconPress && (
          <Pressable onPress={onRightIconPress}>{RightIcon}</Pressable>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.black[0],
    paddingHorizontal: 30,
  },
  transparentContainer: {backgroundColor: 'transparent'},
  headerTitle: {
    ...Typography.headline[500],
    color: Colors.black[900],
  },
  leftIconContainer: {},
  rightIconContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    // gap: 20,
  },
  plusContainer: {
    position: 'absolute',
    right: 40,
  },
})

export default Header
