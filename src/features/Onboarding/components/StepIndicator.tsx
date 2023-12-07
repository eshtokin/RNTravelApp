import React, {useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {Colors} from '@utils'

const LINE_WIDTH = 100

type StepIndicatorProps = {
  currentStep: number
  duration: number
}
const StepIndicator: React.FC<StepIndicatorProps> = ({
  duration,
  currentStep,
}) => {
  const progress1 = useSharedValue(0)
  const progress2 = useSharedValue(0)
  const progress3 = useSharedValue(0)

  const line1Style = useAnimatedStyle(() => ({
    width: progress1.value,
  }))

  const line2Style = useAnimatedStyle(() => ({
    width: progress2.value,
  }))

  const line3Style = useAnimatedStyle(() => ({
    width: progress3.value,
  }))

  const animateProgress = (progress: SharedValue<number>, duration: number) => {
    progress.value = withTiming(LINE_WIDTH, {duration, easing: Easing.linear})
  }

  const finishProgressImediatelly = (progress: SharedValue<number>) =>
    (progress.value = LINE_WIDTH)

  useEffect(() => {
    switch (currentStep) {
      case 0:
        animateProgress(progress1, duration)
        break
      case 1:
        if (progress1.value !== LINE_WIDTH) {
          finishProgressImediatelly(progress1)
        }
        animateProgress(progress2, duration)
        break
      case 2:
        if (progress2.value !== LINE_WIDTH) {
          finishProgressImediatelly(progress2)
        }
        animateProgress(progress3, duration)
        break
    }
  }, [currentStep])

  return (
    <View style={styles.container}>
      <View style={styles.step}>
        <Animated.View style={[styles.activeStep, line1Style]} />
      </View>
      <View style={styles.step}>
        <Animated.View style={[styles.activeStep, line2Style]} />
      </View>
      <View style={styles.step}>
        <Animated.View style={[styles.activeStep, line3Style]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    gap: 7,
    marginBottom: 100,
  },
  step: {
    width: 100,
    height: 1,
    backgroundColor: Colors.black[300],
  },
  activeStep: {
    width: 100,
    height: 1,
    backgroundColor: Colors.black[0],
  },
})

export default StepIndicator
