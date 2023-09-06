import React from 'react'
import {StyleSheet, View} from 'react-native'
import Colors from '../../../utils/Colors'

type StepIndicatorProps = {
  steps: number
  activeIndex: number
}
const StepIndicator: React.FC<StepIndicatorProps> = ({steps, activeIndex}) => {
  // TODO: implement animation and timer for goint to next step
  return (
    <View style={styles.container}>
      {Array(steps)
        .fill(null)
        .map((_, index) => (
          <View
            key={`loader-${index}`}
            style={[styles.step, index === activeIndex && styles.activeStep]}
          />
        ))}
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
    backgroundColor: Colors.black[0],
  },
})

export default StepIndicator
