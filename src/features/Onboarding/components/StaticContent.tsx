import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Button} from '@components'
import StepIndicator from './StepIndicator'

type StaticContentProps = {
  currentIndex: number
  duration: number
  buttonLabel: string
  onNextPress: () => void
}
const StaticContent: React.FC<StaticContentProps> = ({
  currentIndex,
  onNextPress,
  buttonLabel,
  duration,
}) => {
  return (
    <View style={styles.staticContent}>
      <StepIndicator currentStep={currentIndex} duration={duration} />
      <Button
        type={'primary'}
        icon={'label-only'}
        size={'large'}
        label={buttonLabel}
        onPress={onNextPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  staticContent: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
  },
})

export default StaticContent
