import {observer} from 'mobx-react-lite'
import {FlatList, StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Input, Package, ScreenTitle} from '@components'
import store from '@store/RootStore'
import {Colors} from '@utils'

type WishListProps = {}
const WishList: React.FC<WishListProps> = observer(({}) => {
  const {
    searchValueForWishlist,
    favouritePlaces,
    toggleFavouriteOnPlace,
    placesForFavouriteSearch,
  } = store.places

  const setSearchValue = (value: string) =>
    store.places.changeSearchValue(value, true)

  return (
    <SafeAreaView style={styles.screenContainer} edges={['top']}>
      <ScreenTitle title="Your Wishlist" style={styles.screenTitle} />
      <View style={styles.searchContainer}>
        <Input
          label="Search"
          onChangeText={setSearchValue}
          value={searchValueForWishlist}
        />
      </View>
      <FlatList
        data={
          placesForFavouriteSearch.length
            ? placesForFavouriteSearch
            : favouritePlaces
        }
        keyExtractor={({name, location}) => name + location.latitude}
        renderItem={({item}) => (
          <Package
            item={item}
            onHeartIconPress={() => toggleFavouriteOnPlace(item.name)}
          />
        )}
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.black[0],
  },
  screenTitle: {
    marginVertical: 30,
    paddingHorizontal: 30,
  },
  searchContainer: {
    marginHorizontal: 30,
    marginBottom: 14,
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
})

export default WishList
