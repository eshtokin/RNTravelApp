import {FlatList, StyleSheet, View} from 'react-native'
import {Input, Package, Text} from '../../components'
import Colors from '../../utils/Colors'
import {SafeAreaView} from 'react-native-safe-area-context'
import store from '../../store/RootStore'
import {observer} from 'mobx-react-lite'

type WishListProps = {}
const WishList: React.FC<WishListProps> = observer(({}) => {
  const {favouritePlaces, toggleFavouriteOnPlace} = store.places
  return (
    <SafeAreaView style={styles.screenContainer} edges={['top']}>
      <Text font="headline" fontWeight={700} style={styles.textAddStyle}>
        Your Wishlist
      </Text>
      <View style={styles.searchContainer}>
        <Input label="Search" onChageText={() => {}} value="" />
      </View>
      <FlatList
        data={favouritePlaces}
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
  textAddStyle: {
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
