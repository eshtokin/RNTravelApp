import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  useColorScheme,
} from 'react-native'
import {categoryIconBeach, categoryIconMountain} from '../../../assets/icons'
import {LogoBlack, LogoWhite, LoupeIcon} from '../../../assets/icons/svg'
import {
  ColorPalleteView,
  TypographyView,
  ButtonView,
  Category,
  Package,
  Rate,
  Destination,
  Input,
  Header,
  Switch,
} from '../../components'
import Colors from '../../utils/Colors'
import {kutaBeachDestinationSmall} from '../../../assets/images'
import MOCK_PLACES from '../../store/mock'

type ComponentsViewProps = {}
const ComponentsView: React.FC<ComponentsViewProps> = ({}) => {
  const isDarkMode = useColorScheme() === 'dark'

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // }

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
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
          name={MOCK_PLACES[0].name}
          description={MOCK_PLACES[0].description}
          price={MOCK_PLACES[0].price}
          rate={MOCK_PLACES[0].rate}
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
          photo={kutaBeachDestinationSmall}
          inFavourites={true}
          name={MOCK_PLACES[0].name}
          location={MOCK_PLACES[0].country}
          rate={MOCK_PLACES[0].rate}
          onFavIconPress={() => {}}
          onDestinationPress={() => {}}
        />
        <Text>{email}</Text>
        <Text>{password}</Text>
        <Input
          label="Email"
          value={email}
          onChageText={setEmail}
          rightIcon={<LoupeIcon />}
          onRightIconPress={function (): void {
            console.log('test')
          }}
        />
        <Input
          label="Password"
          secured
          value={password}
          onChageText={setPassword}
        />
        <Switch onToggle={flag => {}} value={false} />
        <Header />
      </ScrollView>
    </SafeAreaView>
  )
}
export default ComponentsView
