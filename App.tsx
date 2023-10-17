import React from 'react'
import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import RootNavigation from './src/navigation/RootNavigator'
import SplashScreen from 'react-native-splash-screen'
import store from './src/store/RootStore'
import usePersistedData from './src/store/usePersistanceStore'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

function App(): JSX.Element {
  usePersistedData(store)
  React.useEffect(() => {
    setTimeout(SplashScreen.hide, 1000)
  }, [])

  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  gestureContainer: {flex: 1},
})

export default App
