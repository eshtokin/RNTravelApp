import {ReactElement} from 'react'
import {Pressable, StyleSheet, View} from 'react-native'
import Colors from '../utils/Colors'
import {Text} from '../components'
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import {
  HeartIcon,
  HomeIcon,
  PersonIcon,
  PlaneIcon,
} from '../../assets/icons/svg'
import {HomeScreens} from './types'
import TabbarIcon from './TabbarIcon'

type TabBarProps = BottomTabBarProps
const TabBar: React.FC<TabBarProps> = ({state, insets, navigation}) => {
  const activeRoute = state.routeNames[state.index]
  const onIconPress = (screen: HomeScreens) => navigation.navigate(screen)
  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: 20 + insets.bottom,
        },
      ]}>
      <TabbarIcon
        label="Home"
        Icon={HomeIcon}
        active={activeRoute === HomeScreens.Home}
        onPress={() => onIconPress(HomeScreens.Home)}
      />
      <TabbarIcon
        label="My Trip"
        Icon={PlaneIcon}
        active={activeRoute === HomeScreens.MyTrip}
        onPress={() => onIconPress(HomeScreens.MyTrip)}
      />
      <TabbarIcon
        label="Wishlist"
        Icon={HeartIcon}
        active={activeRoute === HomeScreens.Wishlist}
        onPress={() => onIconPress(HomeScreens.Wishlist)}
      />
      <TabbarIcon
        label="Profile"
        Icon={PersonIcon}
        active={activeRoute === HomeScreens.Components}
        onPress={() => onIconPress(HomeScreens.Components)}
      />
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
