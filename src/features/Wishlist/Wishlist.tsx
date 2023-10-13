import {observer} from 'mobx-react-lite'
import {useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {CrossIcon, LoupeIcon} from '../../../assets/icons/svg'
import {Input, Package, Text} from '../../components'
import store from '../../store/RootStore'
import Colors from '../../utils/Colors'
import ScreenTitle from '../../components/ScreenTitle'

type WishListProps = {}
const WishList: React.FC<WishListProps> = observer(({}) => {
  const {favouritePlaces, toggleFavouriteOnPlace} = store.places
  const [searchValue, setSearchValue] = useState('')
  const clearInput = () => setSearchValue('')
  return (
    <SafeAreaView style={styles.screenContainer} edges={['top']}>
      <ScreenTitle title="Your Wishlist" style={styles.screenTitle} />
      <View style={styles.searchContainer}>
        <Input
          label="Search"
          onChageText={setSearchValue}
          value={searchValue}
          rightIcon={searchValue.length ? <CrossIcon /> : <LoupeIcon />}
          onRightIconPress={searchValue.length ? clearInput : undefined}
        />
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
