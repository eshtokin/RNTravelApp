import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from '../features/Home'
import {ComponentsView} from '../features/ComponentsView'
import TabBar from './Tabbar'
import {HomeScreens, HomeScreensPropsTypes} from './types'
import {Wishlist} from '../features/Wishlist'
import {Profile} from '../features/Profile'
import {MyTrip} from '../features/MyTrip'

const {Navigator, Screen} = createBottomTabNavigator<HomeScreensPropsTypes>()

type HomeNavigatorProps = {}
const HomeNavigator: React.FC<HomeNavigatorProps> = ({}) => {
  return (
    <Navigator tabBar={TabBar}>
      <Screen
        name={HomeScreens.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Screen name={HomeScreens.MyTrip} component={MyTrip} />
      <Screen name={HomeScreens.Wishlist} component={Wishlist} />
      <Screen name={HomeScreens.Profile} component={Profile} />
      <Screen name={HomeScreens.Components} component={ComponentsView} />
    </Navigator>
  )
}

export default HomeNavigator
