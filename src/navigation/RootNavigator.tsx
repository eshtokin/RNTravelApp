import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, {useEffect} from 'react'
import {Onboarding} from '../features/Onboarding'
import {ComponentsView} from '../features/ComponentsView'
import {RootStackProps, Screens} from './types'
import {CreateAccount, ForgotPassword, Login} from '../features/Login'
import ChooseFavouritePlace from '../features/Login/containers/ChooseFavouritePlace'
import HomeNavigator from './HomeStack'

const {Screen, Navigator} = createNativeStackNavigator<RootStackProps>()

type RootNavigationProps = {}
const RootNavigation: React.FC<RootNavigationProps> = ({}) => {
  return (
    <Navigator
      initialRouteName={Screens.Login}
      screenOptions={{headerShown: false}}>
      <Screen
        name={Screens.Onboarding}
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Screen name={Screens.Login} component={Login} />
      <Screen name={Screens.ForgotPassword} component={ForgotPassword} />
      <Screen name={Screens.CreateAccount} component={CreateAccount} />
      <Screen
        name={Screens.ChooseFavouritePlace}
        component={ChooseFavouritePlace}
      />
      <Screen name={Screens.Main} component={HomeNavigator} />
      <Screen name={Screens.Components} component={ComponentsView} />
    </Navigator>
  )
}

export default RootNavigation
