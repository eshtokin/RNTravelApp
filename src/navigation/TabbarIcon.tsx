import {JSXElementConstructor, memo, useEffect, useState} from 'react'
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
// iconWidth + paddingHorizontal
const BASE_WIDTH = 50
const ACTIVE_WITH = 130
const DURATION = 300

type TabbarIconProps = {
  active?: boolean
  label: string
  Icon: JSXElementConstructor<SharedIconProps>
  onPress: () => void
}
const TabbarIcon: React.FC<TabbarIconProps> = memo(
  ({active, label, Icon, onPress}) => {
    const [lWidth, setLWidth] = useState(0)

    const width = useSharedValue(BASE_WIDTH)
    const opacity = useSharedValue(0)
    const colorProgress = useSharedValue(0)

    const animatedProps = useAnimatedProps(
      () => ({
        stroke: interpolateColor(
          colorProgress.value,
          active ? [1, 0] : [0, 1],
          active
            ? [Colors.black[0], Colors.black[900]]
            : [Colors.black[900], Colors.black[0]],
        ),
      }),
      [active],
    )

    const aConrtainerStyle = useAnimatedStyle(
      () => ({
        backgroundColor: interpolateColor(
          colorProgress.value,
          active ? [0, 1] : [1, 0],
          active
            ? [Colors.black[0], Colors.black[900]]
            : [Colors.black[900], Colors.black[0]],
        ),
      }),
      [active],
    )

    useEffect(() => {
      if (active) {
        width.value = withTiming(ACTIVE_WITH, {duration: DURATION})
        opacity.value = withTiming(1, {duration: DURATION})
        colorProgress.value = withTiming(1, {duration: DURATION})
      } else {
        width.value = withTiming(BASE_WIDTH, {duration: DURATION})
        opacity.value = withTiming(0, {duration: DURATION})
        colorProgress.value = withTiming(0, {duration: DURATION})
      }
    }, [active])

    const maxWidth = active ? lWidth + 13 + BASE_WIDTH : BASE_WIDTH
    return (
      <View style={{width: maxWidth}}>
        <APressable
          onPress={onPress}
          style={[
            styles.container,
            {
              width,
              maxWidth,
            },
            aConrtainerStyle,
          ]}>
          <Icon animatedProps={animatedProps} />
          <Animated.Text
            numberOfLines={1}
            onLayout={({nativeEvent}) => {
              setLWidth(nativeEvent.layout.width)
            }}
            style={[
              styles.label,
              {
                opacity,
              },
            ]}>
            {label}
          </Animated.Text>
        </APressable>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    padding: 13,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  label: {
    position: 'absolute',
    left: BASE_WIDTH,
    color: Colors.black[0],
    fontSize: 20,
    fontWeight: '500',
  },
})

export default TabbarIcon
