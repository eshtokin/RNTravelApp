import {useEffect, useRef} from 'react'
import {SectionList, StatusBar, StyleSheet, View} from 'react-native'
import {ONBOARDING_DATA} from '../onboarding_info'
import Colors from '../../../utils/Colors'
import StaticContent from '../components/StaticContent'
import {DinamicContent} from '../components'
import store from '../../../store/RootStore'
import useOnboardingInterval from '../helpers/useOnboardingInterval'

type OnboardingProps = {}
const Onboarding: React.FC<OnboardingProps> = ({}) => {
  const DURATION = 4000
  const numberOfSteps = ONBOARDING_DATA.length - 1

  const listRef = useRef<SectionList>(null)

  const scrollToNextView = (viewPosition: number) =>
    listRef.current?.scrollToLocation({
      itemIndex: 1,
      sectionIndex: viewPosition,
      animated: true,
      viewOffset: 0,
      viewPosition: 0,
    })

  const {step, goToNextStep, clearOnboardingInterval, setOnboardingInterval} =
    useOnboardingInterval({
      stepDuration: DURATION,
      numberOfSteps,
      callback: scrollToNextView,
    })

  const onButtonPress = () => {
    clearOnboardingInterval()
    goToNextStep()
    setOnboardingInterval()
  }

  useEffect(() => {
    if (step >= 0 && step <= numberOfSteps) {
      scrollToNextView(step)
    } else {
      store.setIsOnboardingPassed(true)
    }
  }, [step, scrollToNextView])

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={Colors.black.transparent}
      />
      <DinamicContent listRef={listRef} />
      <StaticContent
        buttonLabel={ONBOARDING_DATA[step % 3].data[0].buttonLabel || ''}
        currentIndex={step}
        onNextPress={onButtonPress}
        duration={DURATION}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1},
})

export default Onboarding
