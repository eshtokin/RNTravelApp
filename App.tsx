import React from 'react'
import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import RootNavigation from './src/navigation/RootNavigator'
import SplashScreen from 'react-native-splash-screen'

function App(): JSX.Element {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App
