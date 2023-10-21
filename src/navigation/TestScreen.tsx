import {Pressable, StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {JSXElementConstructor, useEffect, useRef, useState} from 'react'
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {HomeIcon} from '../../assets/icons/svg'
import OutlinedHeart from '../../assets/icons/svg/bottomBar/OutlinedHeart'
import Plane from '../../assets/icons/svg/bottomBar/Plane'
import Person from '../../assets/icons/svg/bottomBar/Person'
import SharedIconProps from '../types/SharedIconProps'

type TestScreenProps = {}
const TestScreen: React.FC<TestScreenProps> = ({}) => {
  const [value, setValue] = useState('home')
  const toggleValue = (label: string) => setValue(label)
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
        }}>
        <Component
          active={value === 'home'}
          label="home"
          Icon={HomeIcon}
          onPress={() => toggleValue('home')}
        />
        <Component
          active={value === 'favourite'}
          label="favourite"
          Icon={OutlinedHeart}
          onPress={() => toggleValue('favourite')}
        />
        <Component
          active={value === 'profile'}
          label="profile"
          Icon={Person}
          onPress={() => toggleValue('profile')}
        />
        <Component
          active={value === 'wishlist'}
          label="wishlist"
          Icon={Plane}
          onPress={() => toggleValue('wishlist')}
        />
      </View>
    </SafeAreaView>
  )
}

const BASE_WIDTH = 50
const ACTIVE_WITH = 130
const DURATION = 0.3 * 1000

type ComponentProps = {
  active: boolean
  label: string
  onPress: () => void
  Icon: JSXElementConstructor<SharedIconProps>
}
const Component: React.FC<ComponentProps> = ({
  active,
  label,
  onPress,
  Icon,
}) => {
  const lCurWidth = useRef(0)
  const width = useSharedValue(active ? ACTIVE_WITH : BASE_WIDTH)
  const opacity = useSharedValue(active ? 1 : 0)
  const labelWidth = useSharedValue(active ? 170 : 0)
  const colorProgress = useSharedValue(active ? 100 : 0)

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
    <Pressable onPress={onPress}>
      <Animated.View
        style={[
          {
            height: 50,
            width,
            borderRadius: 20,
            //
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            //
          },
          aConrtainerStyle,
        ]}>
        <View style={{marginHorizontal: 5}}>
          <Icon animatedProps={animatedProps} />
        </View>
        <Animated.Text
          numberOfLines={1}
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '500',
            width: labelWidth,
            opacity,
          }}
          onLayout={event =>
            (lCurWidth.current = event.nativeEvent.layout.width)
          }>
          {label}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
})
export default TestScreen
