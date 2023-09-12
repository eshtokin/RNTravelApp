import React from 'react'
import {StyleSheet, View} from 'react-native'
import TitleForSection from './TitleForSection'
import MOCK_PLACES from '../../../store/mock'
import {Package} from '../../../components'

const PopularPackagesList = () => {
  return (
    <View style={styles.container}>
      <TitleForSection title="Popular Packages" />
      <View style={[styles.scrollContainer, styles.scrollContentContainer]}>
        {MOCK_PLACES.map(({name, description, rate, price, photo}, index) => (
          <Package
            key={name}
            name={name}
            description={description}
            price={price}
            rate={rate}
            inFavourite={true}
            image={photo}
            onHeartIconPress={() => {}}
          />
        ))}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {gap: 24, marginTop: 30},
  scrollContainer: {paddingHorizontal: 30, paddingBottom: 24},
  scrollContentContainer: {gap: 24},
})

export default PopularPackagesList
