import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Header, Text} from '../../components'
import store from '../../store/RootStore'
import Colors from '../../utils/Colors'
import {StarIcon} from '../../../assets/icons/svg'
import REVIEWS from '../../store/mockData/reviews'
import PlaceImageCard from './booking/PlaceImageCard'
import ServiceElement from './booking/ServiceElement'
import Review from './booking/Review'
import BookingBottom from './booking/BookngBottom'
import SERVICE from '../../store/mockData/services'
import GalleryPhoto from './booking/GalleryPhoto'
import MiniMap from './booking/MiniMap'

type BookingProps = {}
const Booking: React.FC<BookingProps> = ({}) => {
  const {selectedPlace} = store.places
  const onBookingPress = () => {}
  return (
    <SafeAreaView style={bookingStyle.container}>
      <Header withBackIcon blackIconColor={Colors.black[900]} />
      <ScrollView style={bookingStyle.scrollContainer}>
        <PlaceImageCard place={selectedPlace} />
        <Text
          font="headline"
          fontWeight={400}
          style={bookingStyle.whatsIncluddesTitle}>
          What’s Included?
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={bookingStyle.serviceScrollContainer}>
          {SERVICE.map(s => {
            return <ServiceElement key={s.label} serviceInfo={s} />
          })}
        </ScrollView>

        <View style={bookingStyle.contentMargin}>
          <Text
            font="headline"
            fontWeight={400}
            style={bookingStyle.aboutTripTytle}>
            About Trip
          </Text>
          <Text font="headline" fontWeight={100}>
            {selectedPlace.description}
          </Text>
          <Text
            font="headline"
            fontWeight={400}
            style={bookingStyle.galeryTitle}>
            Gallery Photo
          </Text>
          <GalleryPhoto />
          <Text font="headline" fontWeight={400}>
            Location
          </Text>
          <MiniMap />
          <View style={bookingStyle.reviewSectionContainer}>
            <Text font="headline" fontWeight={400}>
              Review ({REVIEWS.length})
            </Text>
            <View style={bookingStyle.rateContainer}>
              <StarIcon size={'medium'} filled />
              <Text font="headline" fontWeight={300}>
                {selectedPlace.rate}
              </Text>
            </View>
          </View>
          <View style={bookingStyle.reviewListContainer}>
            {REVIEWS.map(r => (
              <Review review={r} key={`review-${r.name}`} />
            ))}
          </View>
        </View>
      </ScrollView>
      <BookingBottom
        price={selectedPlace.price}
        onBookingPress={onBookingPress}
      />
    </SafeAreaView>
  )
}

const bookingStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black[0],
  },
  scrollContainer: {
    paddingTop: 30,
  },
  whatsIncluddesTitle: {
    marginHorizontal: 30,
    marginTop: 24,
  },
  galeryTitle: {marginTop: 24},
  aboutTripTytle: {marginVertical: 24},
  contentMargin: {marginHorizontal: 30},
  serviceScrollContainer: {
    gap: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  reviewSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewListContainer: {
    marginTop: 24,
    marginBottom: 30,
    gap: 24,
    justifyContent: 'center',
    maxWidth: '100%',
  },
  rateContainer: {flexDirection: 'row', alignItems: 'center', gap: 5},
})

export default Booking
