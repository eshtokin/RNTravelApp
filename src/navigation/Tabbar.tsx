import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import {LayoutAnimation, StyleSheet, View} from 'react-native'
import {
  OutlinedHeart,
  HomeIcon,
  PersonIcon,
  PlaneIcon,
} from '../../assets/icons/svg'
import {Colors} from '@utils'
import TabbarIcon from './TabbarIcon'
import {HomeScreens} from './types'

const tabs = [
  {
    label: 'Home',
    Icon: HomeIcon,
    route: HomeScreens.Home,
  },
  {
    label: 'My Trip',
    Icon: PlaneIcon,
    route: HomeScreens.MyTrip,
  },
  {
    label: 'Wishlist',
    Icon: OutlinedHeart,
    route: HomeScreens.Wishlist,
  },
  {
    label: 'Profile',
    Icon: PersonIcon,
    route: HomeScreens.Profile,
  },
]

type TabBarProps = BottomTabBarProps
const TabBar: React.FC<TabBarProps> = ({state, insets, navigation}) => {
  const activeRoute = state.routeNames[state.index]
  const onIconPress = (screen: HomeScreens) => {
    LayoutAnimation.easeInEaseOut()
    navigation.navigate(screen)
  }

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom + 20,
        },
      ]}>
      {tabs.map(({label, Icon, route}) => {
        const isActive = activeRoute === route
        return (
          <TabbarIcon
            key={route}
            label={label}
            Icon={Icon}
            active={isActive}
            onPress={() => onIconPress(route)}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black[0],
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 30,
  },
})

export default TabBar
