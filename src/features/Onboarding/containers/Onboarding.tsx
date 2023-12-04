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

  const setOnbardingIsFinish = () => store.setIsOnboardingPassed(true)

  const {step, goToNextStep, clearOnboardingInterval, setOnboardingInterval} =
    useOnboardingInterval({
      stepDuration: DURATION,
      numberOfSteps,
      onFinishCallback: setOnbardingIsFinish,
    })

  const onButtonPress = () => {
    clearOnboardingInterval()
    goToNextStep()
    setOnboardingInterval()
  }

  const scrollToNextView = (viewPosition: number) =>
    listRef.current?.scrollToLocation({
      itemIndex: 1,
      sectionIndex: viewPosition,
      animated: true,
      viewOffset: 0,
      viewPosition: 0,
    })

  useEffect(() => {
    if (step >= 0 && step <= numberOfSteps) {
      scrollToNextView(step)
    }
  }, [step, scrollToNextView])

  const buttonLabel =
    step <= numberOfSteps
      ? ONBOARDING_DATA[step % ONBOARDING_DATA.length].data[0].buttonLabel
      : ONBOARDING_DATA[ONBOARDING_DATA.length - 1].data[0].buttonLabel

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={Colors.black.transparent}
      />
      <DinamicContent listRef={listRef} />
      <StaticContent
        buttonLabel={buttonLabel}
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
