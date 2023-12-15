import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {observer} from 'mobx-react-lite'
import React from 'react'
import {Booking, Product} from '@features/Home'
import {CreateAccount, ForgotPassword, Login} from '@features/Login'
import ChooseFavouritePlace from '@features/Login/containers/ChooseFavouritePlace'
import {Onboarding} from '@features/Onboarding'
import store from '@store/RootStore'
import HomeNavigator from './HomeStack'
import {RootStackProps, Screens} from './types'
import {BookingModalContainer} from '@features/BookingModal'

const {Screen, Group, Navigator} = createNativeStackNavigator<RootStackProps>()

const RootNavigation: React.FC = observer(({}) => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      {store.isUserLogged() ? (
        <Group>
          <Screen name={Screens.Main} component={HomeNavigator} />
          <Screen name={Screens.Product} component={Product} />
          <Screen name={Screens.Booking} component={Booking} />
          <Screen
            name={Screens.Modal}
            component={BookingModalContainer}
            options={{presentation: 'modal'}}
          />
        </Group>
      ) : store.isOnboardingPassed ? (
        <Group>
          <Screen name={Screens.Login} component={Login} />
          <Screen name={Screens.ForgotPassword} component={ForgotPassword} />
          <Screen name={Screens.CreateAccount} component={CreateAccount} />
          <Screen
            name={Screens.ChooseFavouritePlace}
            component={ChooseFavouritePlace}
          />
        </Group>
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
