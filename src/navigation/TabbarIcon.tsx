import {JSXElementConstructor, memo, useEffect} from 'react'
import {Pressable, StyleSheet, View} from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import SharedIconProps from '../types/SharedIconProps'
import Colors from '../utils/Colors'

const APressable = Animated.createAnimatedComponent(Pressable)
const BASE_WIDTH = 50
const ACTIVE_WITH = 130
const DURATION = 0.3 * 1000

type TabbarIconProps = {
  active?: boolean
  label: string
  Icon: JSXElementConstructor<SharedIconProps>
  onPress: () => void
}
const TabbarIcon: React.FC<TabbarIconProps> = memo(
  ({active, label, Icon, onPress}) => {
    const width = useSharedValue(BASE_WIDTH)
    const opacity = useSharedValue(0)
    const labelWidth = useSharedValue(0)
    const colorProgress = useSharedValue(0)

    const animatedProps = useAnimatedProps(
      () => ({
        stroke: interpolateColor(
          colorProgress.value,
          active ? [1, 0] : [0, 1],
          active ? ['white', 'black'] : ['black', 'white'],
        ),
      }),
      [active],
    )

    const aConrtainerStyle = useAnimatedStyle(
      () => ({
        backgroundColor: interpolateColor(
          colorProgress.value,
          active ? [0, 1] : [1, 0],
          active ? ['white', 'black'] : ['black', 'white'],
        ),
      }),
      [active],
    )

    useEffect(() => {
      if (active) {
        width.value = withTiming(ACTIVE_WITH, {duration: DURATION})
        opacity.value = withTiming(1, {duration: DURATION / 2})
        labelWidth.value = withTiming(90, {duration: DURATION / 4})
        colorProgress.value = withTiming(1, {duration: DURATION})
      } else {
        width.value = withTiming(BASE_WIDTH, {duration: DURATION})
        opacity.value = withTiming(0, {duration: DURATION / 2})
        labelWidth.value = withTiming(0, {duration: DURATION / 4})
        colorProgress.value = withTiming(0, {duration: DURATION})
      }
    }, [active])

    return (
      <APressable
        onPress={onPress}
        style={[
          styles.container,
          {
            width,
          },
          aConrtainerStyle,
        ]}>
        <View style={styles.iconContainer}>
          <Icon animatedProps={animatedProps} />
        </View>
        {/* <Animated.Text
          numberOfLines={1}
          style={[
            styles.label,
            {
              width: labelWidth,
              opacity,
            },
          ]}>
          {label}
        </Animated.Text> */}
      </APressable>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  activeContainer: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    gap: 10,
    backgroundColor: Colors.black[900],
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  label: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
})

export default TabbarIcon
