import React, {useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {observer} from 'mobx-react-lite'
import TitleForSection from './TitleForSection'
import {Package} from '../../../components'
import store from '../../../store/RootStore'

const PopularPackagesList = observer(() => {
  const {places, toggleFavouriteOnPlace} = store.places
  const onFavIconPress = (name: string) => toggleFavouriteOnPlace(name)
  useEffect(() => {
    setTimeout(() => toggleFavouriteOnPlace(places[0].name), 1000)
  }, [])
  return (
    <View style={styles.container}>
      <TitleForSection title="Popular Packages" />
      <View style={[styles.scrollContainer, styles.scrollContentContainer]}>
        {places
          .slice(0, 5)
          .map(({name, description, rate, price, photo, inFavourites}) => (
            <Package
              key={name}
              name={name}
              description={description}
              price={price}
              rate={rate}
              inFavourite={inFavourites}
              image={photo}
              onHeartIconPress={() => onFavIconPress(name)}
            />
          ))}
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {gap: 24, marginTop: 30},
  scrollContainer: {paddingHorizontal: 30, paddingBottom: 24},
  scrollContentContainer: {gap: 24},
})

export default PopularPackagesList
