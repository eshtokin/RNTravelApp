import React from 'react'
import {Pressable, StyleSheet, Text, View, useAnimatedValue} from 'react-native'
import Typography from '../utils/Typography'
import Colors from '../utils/Colors'
import {BackArrow, LoupeIcon, SquarePlus} from '../../assets/icons/svg'
import {useNavigation} from '@react-navigation/native'

type HeaderProps = {
  withBackIcon?: boolean
  onPlusIconPress?: () => void
  onSearchIconPress?: () => void
  transparent?: boolean
}
const Header: React.FC<HeaderProps> = ({
  transparent = false,
  withBackIcon = false,
  onPlusIconPress,
  onSearchIconPress,
}) => {
  const navigation = useNavigation()
  const goBack = () => navigation.canGoBack() && navigation.goBack()
  return (
    <View
      style={[styles.container, transparent && styles.transparentContainer]}>
      <Pressable style={styles.leftIconContainer} onPress={goBack}>
        {withBackIcon && <BackArrow />}
      </Pressable>
      <Text style={styles.headerTitle}>Travel</Text>
      <View style={styles.rightIconContainer}>
        {onPlusIconPress && (
          <Pressable style={styles.plusContainer} onPress={onPlusIconPress}>
            <SquarePlus />
          </Pressable>
        )}
        {onSearchIconPress && (
          <Pressable onPress={onSearchIconPress}>
            <LoupeIcon />
          </Pressable>
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
    paddingHorizontal: 20,
  },
  transparentContainer: {backgroundColor: 'transparent'},
  headerTitle: {
    ...Typography.headline[500],
    color: Colors.black[900],
  },

  leftIconContainer: {},
  rightIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  plusContainer: {
    position: 'absolute',
    right: 40,
  },
})

export default Header
