import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from '../features/Home'

const {Navigator, Screen} = createBottomTabNavigator()

enum HomeScreens {
  Home = 'Home',
  WishList = 'WishList',
  MyTrip = 'MyTrip',
  Profile = 'Profile',
}

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
      <Screen name={HomeScreens.Profile} component={Home} />
    </Navigator>
  )
}

export default HomeNavigator
