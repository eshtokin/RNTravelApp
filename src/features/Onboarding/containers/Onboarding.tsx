import React, {Ref} from 'react'
import {FlatList, StatusBar, StyleSheet, View} from 'react-native'
import {ONBOARDING_DATA} from '../onboarding_info'
import Colors from '../../../utils/Colors'
import StaticContent from '../components/StaticContent'
import {DinamicContent} from '../components'

type OnboardingProps = {}
const Onboarding: React.FC<OnboardingProps> = ({}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const listRef = React.useRef<FlatList>(null)

  const onNextPress = () => {
    const newIndex =
      currentIndex + 1 >= ONBOARDING_DATA.length ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    listRef.current?.scrollToIndex({
      index: newIndex,
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
