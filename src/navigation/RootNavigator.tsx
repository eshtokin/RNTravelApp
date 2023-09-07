import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Onboarding} from '../features/Onboarding'
import {ComponentsView} from '../features/ComponentsView'
import {Login} from '../features/Login'
import {RootStackProps, Screens} from './types'

const {Screen, Navigator} = createNativeStackNavigator<RootStackProps>()

type RootNavigationProps = {}
const RootNavigation: React.FC<RootNavigationProps> = ({}) => {
  return (
    <Navigator>
      <Screen
        name={Screens.Onboarding}
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Screen name={Screens.Login} component={Login} />
      <Screen name={Screens.Components} component={ComponentsView} />
    </Navigator>
  )
}

export default RootNavigation
