import React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import {observer} from 'mobx-react-lite'
import {Destination} from '../../../components'
import TitleForSection from './TitleForSection'
import store from '../../../store/RootStore'

const Places: React.FC = observer(() => {
  const {placesForSelectedCategory, toggleFavouriteOnPlace} = store.places
  const onFavIconPress = (placeName: string) => () =>
    toggleFavouriteOnPlace(placeName)

  return (
    <>
      <TitleForSection title="Favorite Place" label="Explore" />
      <FlatList
        horizontal
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        data={placesForSelectedCategory}
        keyExtractor={item => item.name}
        renderItem={({item, index}) => (
          <Destination
            key={item.name}
            item={item}
            onFavIconPress={onFavIconPress(item.name)}
            onDestinationPress={() => {}}
          />
        )}
      />
    </>
  )
})

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 0,
  },
  scrollContent: {
    gap: 20,
    paddingVertical: 24,
    paddingHorizontal: 30,
  },
})

export default Places
