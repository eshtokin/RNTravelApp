import {ImageBackground, ScrollView, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button, Header, Rate, Text} from '../../components'
import store from '../../store/RootStore'
import Colors from '../../utils/Colors'
import {Location, StarIcon, VerifiedIcon} from '../../../assets/icons/svg'
import PlaneIcon from '../../../assets/icons/svg/service/PlaneIcon'
import HotelIcon from '../../../assets/icons/svg/service/CarIcon'
import CarIcon from '../../../assets/icons/svg/service/CarIcon'
import REVIEWS from '../../store/mockReviews'

const SERVICE = [
  {label: 'Flight', icon: <PlaneIcon />},
  {label: 'Hotel', icon: <HotelIcon />},
  {label: 'Transport', icon: <CarIcon />},
]

type BookingProps = {}
const Booking: React.FC<BookingProps> = ({}) => {
  const {selectedPlace} = store.places
  return (
    <SafeAreaView style={{backgroundColor: Colors.black[0], flex: 1}}>
      <Header withBackIcon blackIconColor={Colors.black[900]} />
      <ScrollView style={{}}>
        <ImageBackground
          resizeMode="cover"
          imageStyle={{borderRadius: 20}}
          style={{
            height: 220,
            marginHorizontal: 30,
            justifyContent: 'flex-end',
            padding: 24,
          }}
          source={selectedPlace.photo}>
          <View style={{position: 'absolute', top: 24, right: 24}}>
            <VerifiedIcon />
          </View>
          <View style={{gap: 5}}>
            <Text
              font="headline"
              fontWeight={500}
              color="black"
              colorWeight={0}>
              {selectedPlace.name}
            </Text>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Location />
              <Text
                font="headline"
                fontWeight={100}
                color="black"
                colorWeight={0}>
                {selectedPlace.country}
              </Text>
            </View>
            <Text
              font="headline"
              fontWeight={100}
              color="black"
              colorWeight={0}>
              <Text
                font="headline"
                fontWeight={200}
                color="black"
                colorWeight={0}>
                100+
              </Text>
              people have explored
            </Text>
            <Rate value={selectedPlace.rate} whiteValue />
          </View>
        </ImageBackground>

        <Text
          font="headline"
          fontWeight={400}
          style={{
            marginHorizontal: 30,
            marginTop: 24,
          }}>
          What’s Included?
        </Text>
        <ScrollView
          style={{}}
          horizontal
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}>
          {SERVICE.map(s => {
            return (
              <View
                key={s.label}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: Colors.black[200],
                  paddingLeft: 5,
                  paddingVertical: 5,
                  paddingRight: 15,
                }}>
                <View
                  style={{
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: Colors.black[10],
                  }}>
                  {s.icon}
                </View>
                <Text font="headline" fontWeight={300}>
                  {s.label}
                </Text>
              </View>
            )
          })}
        </ScrollView>

        <View style={{marginHorizontal: 30}}>
          <Text font="headline" fontWeight={400} style={{marginVertical: 24}}>
            About Trip
          </Text>
          <Text font="headline" fontWeight={100}>
            {selectedPlace.description}
          </Text>
          <Text font="headline" fontWeight={400} style={{marginTop: 24}}>
            Gallery Photo
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 24,
            }}>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <View
                  key={`galery-${index}`}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 20,
                    backgroundColor: 'grey',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {index === 2 && (
                    <Text
                      font="headline"
                      fontWeight={600}
                      color="black"
                      colorWeight={0}>
                      + 20
                    </Text>
                  )}
                </View>
              ))}
          </View>
          <Text font="headline" fontWeight={400}>
            Location
          </Text>
          <View
            style={{
              marginVertical: 24,
              backgroundColor: 'grey',
              height: 200,
              width: '100%',
              borderRadius: 20,
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text font="headline" fontWeight={400}>
              Review (99)
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <StarIcon size={'medium'} filled />
              <Text font="headline" fontWeight={300}>
                4.9
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 24,
              gap: 24,
              justifyContent: 'center',
              maxWidth: '100%',
            }}>
            {REVIEWS.map(r => (
              <View
                key={`review-${r.name}`}
                style={{flexDirection: 'row', gap: 15}}>
                <View
                  style={{
                    marginTop: 5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: 'grey',
                  }}
                />
                <View style={{width: '85%'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text font="headline" fontWeight={300}>
                      {r.name}
                    </Text>
                    <Text
                      font="headline"
                      fontWeight={200}
                      color="black"
                      colorWeight={400}>
                      {r.date}
                    </Text>
                  </View>
                  <Rate value={r.rate} whiteValue />
                  <Text font="bodyText" fontWeight={200}>
                    {r.comment}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 30,
          paddingTop: 24,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            alignSelf: 'center',
          }}>
          <Text
            font="headline"
            fontWeight={300}
            color="error"
            colorWeight={500}>
            $745
          </Text>
          <Text
            font="bodyText"
            fontWeight={100}
            color="black"
            colorWeight={400}>
            / Person
          </Text>
        </View>
        <Button
          size="large"
          type="primary"
          label={'Booking'}
          onPress={() => {}}
          icon={'label-only'}
          addStyles={{minWidth: 175}}
        />
      </View>
    </SafeAreaView>
  )
}

export default Booking
