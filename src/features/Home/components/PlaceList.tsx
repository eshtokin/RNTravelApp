import React from 'react'
import {SectionList, StyleSheet} from 'react-native'
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
      <SectionList
        horizontal
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        sections={[{data: places}]}
        renderItem={({item: {name, inFavourites, country, rate, photo}}) => (
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
    paddingHorizontal: 10,
  },
})

export default Places
