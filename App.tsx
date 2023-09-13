import React from 'react'
import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import RootNavigation from './src/navigation/RootNavigator'
import SplashScreen from 'react-native-splash-screen'
import store from './src/store/RootStore'
import usePersistedData from './src/store/usePersistanceStore'

function App(): JSX.Element {
  usePersistedData(store)
  React.useEffect(() => {
    setTimeout(SplashScreen.hide, 1000)
  }, [])

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App
