import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native'
import {
  ColorPalleteView,
  TypographyView,
  Button,
  ButtonView,
  Category,
  Package,
  Destination,
  Rate,
} from './src/components'
import {categoryIconBeach, categoryIconMountain} from './assets/icons'
import {MOCK_PACKAGE} from './src/store/mock'
import {LogoBlack, LogoWhite} from './assets/icons/svg'
import Colors from './src/utils/Colors'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={{backgroundColor: 'white'}}>
        <ColorPalleteView />
        <TypographyView />
        <ButtonView />
        <View style={{flexDirection: 'row'}}>
          <Category label="Beach" icon={categoryIconBeach} onPress={() => {}} />
          <Category
            active
            label="Mountain"
            icon={categoryIconMountain}
            onPress={() => {}}
          />
        </View>
        <Package
          name={MOCK_PACKAGE.name}
          description={MOCK_PACKAGE.description}
          price={MOCK_PACKAGE.price}
          rate={MOCK_PACKAGE.rate}
          inFavourite={true}
          image={0}
          onHeartIconPress={() => {}}
        />
        <LogoBlack />
        <View style={{backgroundColor: Colors.black[300]}}>
          <LogoWhite />
        </View>
        <Rate value={5} size="large" />
        <Rate value={4} size="medium" />
        <Rate value={3} size="small" />
        <Destination
          inFavourites={true}
          name={MOCK_PACKAGE.name}
          location={MOCK_PACKAGE.location}
          rate={MOCK_PACKAGE.rate}
          onFavIconPress={() => {}}
          onDestinationPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App
