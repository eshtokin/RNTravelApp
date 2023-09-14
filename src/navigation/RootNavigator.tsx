import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {observer} from 'mobx-react-lite'
import {Onboarding} from '../features/Onboarding'
import {CreateAccount, ForgotPassword, Login} from '../features/Login'
import ChooseFavouritePlace from '../features/Login/containers/ChooseFavouritePlace'
import HomeNavigator from './HomeStack'
import store from '../store/RootStore'
import {RootStackProps, Screens} from './types'

const {Screen, Navigator} = createNativeStackNavigator<RootStackProps>()

type RootNavigationProps = {}
const RootNavigation: React.FC<RootNavigationProps> = observer(({}) => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      {store.isUserLogged() ? (
        <Screen name={Screens.Main} component={HomeNavigator} />
      ) : store.isOnboardingPassed ? (
        <>
          <Screen name={Screens.Login} component={Login} />
          <Screen name={Screens.ForgotPassword} component={ForgotPassword} />
          <Screen name={Screens.CreateAccount} component={CreateAccount} />
          <Screen
            name={Screens.ChooseFavouritePlace}
            component={ChooseFavouritePlace}
          />
        </>
      ) : (
        <Screen
          name={Screens.Onboarding}
          component={Onboarding}
          options={{headerShown: false}}
        />
      )}
    </Navigator>
  )
})

export default RootNavigation
