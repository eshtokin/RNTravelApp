import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from '../features/Home'
import TabBar from './Tabbar'
import {HomeScreens, HomeScreensPropsTypes} from './types'
import {Wishlist} from '../features/Wishlist'
import {Profile} from '../features/Profile'
import {MyTrip} from '../features/MyTrip'
import {observer} from 'mobx-react-lite'

const {Navigator, Screen} = createBottomTabNavigator<HomeScreensPropsTypes>()

type HomeNavigatorProps = {}
const HomeNavigator: React.FC<HomeNavigatorProps> = observer(() => {
  return (
    <Navigator tabBar={TabBar} screenOptions={{headerShown: false}}>
      <Screen name={HomeScreens.Home} component={Home} />
      <Screen name={HomeScreens.MyTrip} component={MyTrip} />
      <Screen name={HomeScreens.Wishlist} component={Wishlist} />
      <Screen name={HomeScreens.Profile} component={Profile} />
    </Navigator>
  )
})

export default HomeNavigator
