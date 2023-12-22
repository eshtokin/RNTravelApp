import {StyleSheet, View} from 'react-native'
import TitleForSection from './TitleForSection'
import {Package} from '@components'
import store from '@store/RootStore'

const PopularPackagesList = () => {
  const {places, toggleFavouriteOnPlace} = store.places
  const onFavIconPress = (name: string) => {
    toggleFavouriteOnPlace(name)
  }
  return (
    <View style={styles.container}>
      <TitleForSection title="Popular Packages" />
      <View style={[styles.scrollContainer, styles.scrollContentContainer]}>
        {places.map(item => (
          <Package
            key={item.name}
            item={item}
            onHeartIconPress={() => onFavIconPress(item.name)}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {gap: 24, marginTop: 10},
  scrollContainer: {paddingHorizontal: 30, paddingBottom: 24},
  scrollContentContainer: {gap: 24},
})

export default PopularPackagesList
