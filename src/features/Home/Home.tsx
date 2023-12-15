import {observer} from 'mobx-react-lite'
import {FlatList, StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Package, ScreenTitle} from '@components'
import store from '@store/RootStore'
import {Colors} from '@utils'
import CategoryList from './components/CategoryList'
import Places from './components/PlaceList'
import {TitleForSection} from './components'
import {Screens} from '@navigation/types'
import {useNavigation} from '@react-navigation/native'

type HomeProps = {}
const Home: React.FC<HomeProps> = observer(({}) => {
  const navigation = useNavigation()
  const isEnabled = store.places.placesForSearch.length === 0
  const {placesForSelectedCategory, toggleFavouriteOnPlace, selectPlace} =
    store.places

  const onFavIconPress = (name: string) => {
    toggleFavouriteOnPlace(name)
  }

  const onPlacePress = (name: string) => {
    selectPlace(name)
    navigation.navigate(Screens.Product)
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        scrollEnabled={isEnabled}
        data={placesForSelectedCategory}
        keyExtractor={i => i.name}
        contentContainerStyle={{gap: 24}}
        ListHeaderComponent={() => (
          <>
            <ScreenTitle
              title="Where do you want to explore today?"
              style={styles.screenTitle}
            />
            {/* <Search /> */}
            <CategoryList />
            <Places />
            <View style={styles.titleWrapper}>
              <TitleForSection title="Popular Packages" />
            </View>
          </>
        )}
        renderItem={({item}) => (
          <View style={styles.packageWrapper}>
            <Package
              key={item.name}
              item={item}
              onItemPress={() => onPlacePress(item.name)}
              onHeartIconPress={() => onFavIconPress(item.name)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.black[0]},
  scrollContainer: {flex: 1, backgroundColor: Colors.black[0]},
  screenTitle: {marginBottom: 18, marginTop: 30, paddingHorizontal: 30},
  titleWrapper: {marginTop: 10},
  packageWrapper: {paddingHorizontal: 30},
})

export default Home
