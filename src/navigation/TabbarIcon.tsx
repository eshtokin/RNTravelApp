import {Dimensions, Pressable, StyleSheet, View} from 'react-native'
import Colors from '../utils/Colors'
import {Text} from '../components'
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {JSXElementConstructor, useEffect} from 'react'
import SharedIconProps from '../types/SharedIconProps'
import {Path} from 'react-native-svg'
import {Gesture, GestureDetector} from 'react-native-gesture-handler'

type TabbarIconProps = {
  active?: boolean
  label: string
  Icon: JSXElementConstructor<SharedIconProps>
  onPress: () => void
}
const TabbarIcon: React.FC<TabbarIconProps> = ({
  active,
  label,
  Icon,
  onPress,
}) => {
  const colorProgress = useSharedValue(1)
  const opacity = useSharedValue(0)
  const aStroke = useAnimatedProps<Path>(() => ({
    stroke: interpolateColor(
      colorProgress.value,
      [0, 1],
      [Colors.black[900], Colors.black[0]],
    ),
  }))
  const aTextColor = useAnimatedStyle<Text>(() => ({
    color: interpolateColor(
      colorProgress.value,
      [0, 1],
      [Colors.black[900], Colors.black[0]],
    ),
  }))
  const aBackgroundColor = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      colorProgress.value,
      [0, 1],
      [Colors.black[0], Colors.black[900]],
    ),
  }))

  useEffect(() => {
    colorProgress.value = withTiming(active ? 1 : 0, {duration: 300})
  }, [active])

  const gestureHandler = Gesture.Tap().onEnd(onPress)
  return (
    <GestureDetector gesture={gestureHandler}>
      <Animated.View
        style={[
          styles.container,
          active && styles.activeContainer,
          aBackgroundColor,
        ]}>
        <Icon
          animated
          animatedProps={aStroke}
          color={Colors.black[active ? 900 : 0]}
        />
        <Animated.View style={{overflow: 'hidden', flexWrap: 'wrap', opacity}}>
          {active && (
            <Text
              font="headline"
              fontWeight={300}
              color="black"
              colorWeight={100}
              style={[{flexWrap: 'wrap'}, aTextColor]}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
  container: {
    // maxHeight: 40,
    flex: 1,
    // maxWidth: 140,
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
