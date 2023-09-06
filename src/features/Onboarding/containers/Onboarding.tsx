import React from 'react'
import {ImageBackground, StatusBar, Text, View} from 'react-native'
import {kutaBeachDestinationSmall} from '../../../../assets/images'
import Colors from '../../../utils/Colors'

type OnboardingProps = {}
const Onboarding: React.FC<OnboardingProps> = ({}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'#fff00'}
      />
      <ImageBackground source={kutaBeachDestinationSmall} style={{flex: 1}}>
        <Text>Onboarding</Text>
      </ImageBackground>
    </View>
  )
}

export default Onboarding
