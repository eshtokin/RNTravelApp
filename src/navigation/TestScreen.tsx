import {Pressable, StyleSheet, Switch, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useEffect, useState} from 'react'
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import Colors from '../utils/Colors'
import {HomeIcon} from '../../assets/icons/svg'

type TestScreenProps = {}
const TestScreen: React.FC<TestScreenProps> = ({}) => {
  const [value, setValue] = useState('home')
  const toggleValue = (label: string) => setValue(label)
  return (
    <SafeAreaView style={styles.container}>
      <Text>{value ? 'true' : 'false'}</Text>
      <Component
        active={value === 'home'}
        label="home"
        onPress={() => toggleValue('home')}
      />
      <Component
        active={value === 'favourite'}
        label="favourite"
        onPress={() => toggleValue('favourite')}
      />
      <Component
        active={value === 'profile'}
        label="profile"
        onPress={() => toggleValue('profile')}
      />
      <Component
        active={value === 'wishlist'}
        label="wishlist"
        onPress={() => toggleValue('wishlist')}
      />
    </SafeAreaView>
  )
}

const BASE_WIDTH = 50
const ACTIVE_WITH = 130

type ComponentProps = {active: boolean; label: string; onPress: () => void}
const Component: React.FC<ComponentProps> = ({active, label, onPress}) => {
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
      width.value = withTiming(ACTIVE_WITH)
      opacity.value = withTiming(1, {duration: 150})
      labelWidth.value = withTiming(90, {duration: 150})
      colorProgress.value = withTiming(1)
    } else {
      width.value = withTiming(BASE_WIDTH)
      opacity.value = withTiming(0, {duration: 150})
      labelWidth.value = withTiming(0, {duration: 150})
      colorProgress.value = withTiming(0)
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
          <HomeIcon animatedProps={animatedProps} />
        </View>
        <Animated.Text
          numberOfLines={1}
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '500',
            flexWrap: 'wrap',
            width: active ? 'auto' : labelWidth,
            opacity,
          }}>
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
