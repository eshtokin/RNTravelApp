import {observer} from 'mobx-react-lite'
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native'
import store from '../../store/RootStore'
import {Button, Header, Text} from '../../components'
import {SafeAreaView} from 'react-native-safe-area-context'
import {
  HeartIcon,
  HeartIconFilled,
  Location,
  StarIcon,
} from '../../../assets/icons/svg'
import {DarkOverlay} from '../../../assets/decoration'
import Colors from '../../utils/Colors'
import {useNavigation} from '@react-navigation/native'
import {Screens} from '../../navigation/types'

const SCREEN_SIZE = Dimensions.get('screen')

type ProductProps = {}
const Product: React.FC<ProductProps> = observer(({}) => {
  const navigation = useNavigation()
  const {selectedPlace, toggleFavouriteOnPlace} = store.places
  console.log(selectedPlace)
  const onFavIconPress = () => toggleFavouriteOnPlace(selectedPlace.name)
  const onBookingPress = () => navigation.navigate(Screens.Booking)

  return (
    <ImageBackground source={selectedPlace.photo} style={{flex: 1}}>
      <View style={styles.overlayPosition}>
        <DarkOverlay height={SCREEN_SIZE.height} width={SCREEN_SIZE.width} />
      </View>
      <SafeAreaView style={styles.contentWrapper}>
        <Header
          transparent
          withoutTitle
          withBackIcon
          RightIcon={
            selectedPlace.inFavourites ? (
              <HeartIconFilled />
            ) : (
              <HeartIcon color={Colors.black[0]} />
            )
          }
          onRightIconPress={onFavIconPress}
        />
        <View style={styles.information}>
          <View style={styles.destinationInformation}>
            <Text
              font="headline"
              fontWeight={800}
              color="black"
              colorWeight={0}>
              {selectedPlace.name}
            </Text>
            <View style={styles.rowWithIcon}>
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
              100+ people have explored
            </Text>
          </View>
          <Text
            font="headline"
            fontWeight={100}
            color="black"
            colorWeight={0}
            style={styles.description}>
            {selectedPlace.description}
          </Text>
          <View style={styles.rowWithIcon}>
            <StarIcon size={'small'} />
            <Text
              font="headline"
              fontWeight={300}
              color="black"
              colorWeight={0}>
              {selectedPlace.rate}
            </Text>
          </View>
          <View style={styles.bookingInformation}>
            <Text
              font="headline"
              fontWeight={300}
              color="black"
              colorWeight={0}>
              ${selectedPlace.price} / Person
            </Text>
            <Button
              type={'primary'}
              icon={'label-only'}
              size={'large'}
              label={'Booking'}
              addStyles={styles.bookingBtn}
              onPress={onBookingPress}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
})

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlayPosition: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'hidden',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  information: {
    paddingHorizontal: 30,
  },
  destinationInformation: {
    gap: 10,
  },
  rowWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  description: {
    marginVertical: 20,
  },
  bookingInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  bookingBtn: {
    minWidth: 175,
  },
})

export default Product
