import React from 'react'
import {SectionList, StatusBar, StyleSheet, View} from 'react-native'
import {ONBOARDING_DATA} from '../onboarding_info'
import Colors from '../../../utils/Colors'
import StaticContent from '../components/StaticContent'
import {useNavigation} from '@react-navigation/native'
import {Screens} from '../../../navigation/types'
import {DinamicContent} from '../components'

type OnboardingProps = {}
const Onboarding: React.FC<OnboardingProps> = ({}) => {
  const navigation = useNavigation()
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const listRef = React.useRef<SectionList>(null)

  const onNextPress = () => {
    const newIndex = currentIndex + 1
    if (newIndex >= ONBOARDING_DATA.length) {
      navigation.navigate(Screens.Login)
      return
    }
    setCurrentIndex(newIndex)
    listRef.current?.scrollToLocation({
      itemIndex: 1,
      sectionIndex: newIndex,
      animated: true,
      viewOffset: 0,
      viewPosition: 0,
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={Colors.black.transparent}
      />
      <DinamicContent listRef={listRef} />
      <StaticContent currentIndex={currentIndex} onNextPress={onNextPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1},
})

export default Onboarding
