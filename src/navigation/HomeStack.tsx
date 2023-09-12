import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from '../features/Home'
import {ComponentsView} from '../features/ComponentsView'

enum HomeScreens {
  Home = 'Home',
  WishList = 'WishList',
  MyTrip = 'MyTrip',
  Profile = 'Profile',
  Components = 'Components',
}

type HomeScreensPropsTypes = {
  [HomeScreens.Home]: undefined
  [HomeScreens.WishList]: undefined
  [HomeScreens.MyTrip]: undefined
  [HomeScreens.Profile]: undefined
  [HomeScreens.Components]: undefined
}

const {Navigator, Screen} = createBottomTabNavigator<HomeScreensPropsTypes>()

type HomeNavigatorProps = {}
const HomeNavigator: React.FC<HomeNavigatorProps> = ({}) => {
  return (
    <Navigator>
      <Screen
        name={HomeScreens.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Screen name={HomeScreens.WishList} component={Home} />
      <Screen name={HomeScreens.MyTrip} component={Home} />
      {/* <Screen name={HomeScreens.Profile} component={Home} /> */}
      <Screen name={HomeScreens.Components} component={ComponentsView} />
    </Navigator>
  )
}

export default HomeNavigator
