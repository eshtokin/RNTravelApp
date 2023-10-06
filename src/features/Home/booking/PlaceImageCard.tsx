import {ImageBackground, StyleSheet, View} from 'react-native'
import {VerifiedIcon, Location} from '../../../../assets/icons/svg'
import {Rate, Text} from '../../../components'
import {GeneratedPlace} from '../../../store/mockData/places'

type PlaceImageCardProps = {place: GeneratedPlace}
const PlaceImageCard: React.FC<PlaceImageCardProps> = ({place}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      imageStyle={placeCardStyle.image}
      style={placeCardStyle.container}
      source={place.photo}>
      <View style={placeCardStyle.verifiedIconContainer}>
        <VerifiedIcon />
      </View>
      <View style={placeCardStyle.infoContainer}>
        <Text font="headline" fontWeight={500} color="black" colorWeight={0}>
          {place.name}
        </Text>
        <View style={placeCardStyle.locationContainer}>
          <Location />
          <Text font="headline" fontWeight={100} color="black" colorWeight={0}>
            {place.country}
          </Text>
        </View>
        <Text font="headline" fontWeight={100} color="black" colorWeight={0}>
          <Text font="headline" fontWeight={200} color="black" colorWeight={0}>
            100+
          </Text>
          people have explored
        </Text>
        <Rate value={place.rate} whiteValue />
      </View>
    </ImageBackground>
  )
}

const placeCardStyle = StyleSheet.create({
  container: {
    height: 220,
    marginHorizontal: 30,
    justifyContent: 'flex-end',
    padding: 24,
  },
  image: {
    borderRadius: 20,
  },
  verifiedIconContainer: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  locationContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  infoContainer: {
    gap: 5,
  },
})

export default PlaceImageCard
