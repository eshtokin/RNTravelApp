import React from 'react'
import {StyleSheet, View} from 'react-native'
import {ONBOARDING_DATA} from '../onboarding_info'
import {Button} from '../../../components'
import StepIndicator from './StepIndicator'

type StaticContentProps = {
  currentIndex: number
  onNextPress: () => void
}
const StaticContent: React.FC<StaticContentProps> = ({
  currentIndex,
  onNextPress,
}) => {
  return (
    <View style={styles.staticContent}>
      <StepIndicator
        steps={ONBOARDING_DATA.length}
        activeIndex={currentIndex}
      />
      <Button
        type={'primary'}
        icon={'label-only'}
        size={'large'}
        label={ONBOARDING_DATA[currentIndex].buttonLabel}
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
