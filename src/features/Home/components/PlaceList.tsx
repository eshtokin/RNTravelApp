import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import MOCK_PLACES from '../../../store/mock'
import {Destination} from '../../../components'
import TitleForSection from './TitleForSection'

const Places: React.FC = () => {
  return (
    <>
      <TitleForSection title="Favorite Place" label="Explore" />
      <ScrollView
        horizontal
        style={{flexGrow: 0}}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 24,
          paddingHorizontal: 30,
        }}>
        {MOCK_PLACES.map(({name, country, rate, photo}) => (
          <Destination
            key={name}
            inFavourites={true}
            name={name}
            location={country}
            rate={rate}
            photo={photo}
            onFavIconPress={() => {}}
            onDestinationPress={() => {}}
          />
        ))}
      </ScrollView>
    </>
  )
}

const stylePlace = StyleSheet.create({})

export default Places
