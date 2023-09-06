import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Onboarding} from '../features/Onboarding'
import {ComponentsView} from '../features/ComponentsView'

export enum Screens {
  Components = 'Components',
  Onboarding = 'Onboarding',
}

export type RootStackProps = {
  [Screens.Components]: undefined
  [Screens.Onboarding]: undefined
}

const {Screen, Navigator} = createNativeStackNavigator()

type RootNavigationProps = {}
const RootNavigation: React.FC<RootNavigationProps> = ({}) => {
  return (
    <Navigator>
      <Screen
        name={Screens.Onboarding}
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Screen name={Screens.Components} component={ComponentsView} />
    </Navigator>
  )
}

export default RootNavigation
