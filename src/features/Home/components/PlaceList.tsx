import React from 'react'
import {FlatList, LayoutAnimation, StyleSheet} from 'react-native'
import {observer} from 'mobx-react-lite'
import {Destination} from '@components'
import TitleForSection from './TitleForSection'
import store from '@store/RootStore'
import {useNavigation} from '@react-navigation/native'
import {Screens} from '../../../navigation/types'

const Places: React.FC = observer(() => {
  LayoutAnimation.easeInEaseOut()

  const navigation = useNavigation()
  const {toggleFavouriteOnPlace, selectPlace, favouritePlaces} = store.places

  const onFavIconPress = (placeName: string) => () =>
    toggleFavouriteOnPlace(placeName)

  const onDestinationPress = (name: string) => {
    selectPlace(name)
    navigation.navigate(Screens.Product)
  }

  if (favouritePlaces.length === 0) {
    return null
  }

  return (
    <>
      <TitleForSection title="Favorite Place" label="Explore" />
      <FlatList
        horizontal
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        data={favouritePlaces}
        keyExtractor={item => item.name}
        renderItem={({item, index}) => (
          <Destination
            key={item.name}
            item={item}
            onFavIconPress={onFavIconPress(item.name)}
            onDestinationPress={() => onDestinationPress(item.name)}
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
