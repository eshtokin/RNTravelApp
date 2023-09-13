import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {observer} from 'mobx-react-lite'
import {Destination} from '../../../components'
import TitleForSection from './TitleForSection'
import store from '../../../store/RootStore'

const Places: React.FC = observer(() => {
  const {places, toggleFavouriteOnPlace} = store.places
  const onFavIconPress = (placeName: string) => () =>
    toggleFavouriteOnPlace(placeName)

  return (
    <>
      <TitleForSection title="Favorite Place" label="Explore" />
      <ScrollView
        horizontal
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}>
        {places.map(({name, country, rate, photo, inFavourites}) => (
          <Destination
            key={name}
            inFavourites={inFavourites}
            name={name}
            location={country}
            rate={rate}
            photo={photo}
            onFavIconPress={onFavIconPress(name)}
            onDestinationPress={() => {}}
          />
        ))}
      </ScrollView>
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
