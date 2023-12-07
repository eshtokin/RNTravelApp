import {StyleSheet, View} from 'react-native'
import {Button, Text} from '@components'

// TODO: include same component to Product page
type BookingBottomProps = {price: number; onBookingPress: () => void}
const BookingBottom: React.FC<BookingBottomProps> = ({
  price,
  onBookingPress,
}) => {
  return (
    <View style={styles.bookingInformation}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          font="headline"
          fontWeight={300}
          color="error"
          colorWeight={500}
          style={{marginRight: 5}}>
          ${price}
        </Text>
        <Text font="headline" fontWeight={300} color="black" colorWeight={900}>
          / Person
        </Text>
      </View>
      <Button
        type={'primary'}
        icon={'label-only'}
        size={'large'}
        label={'Booking'}
        addStyles={styles.bookingBtn}
        onPress={onBookingPress}
      />
    </View>
  )
  return (
    <View style={styles.container}>
      <View style={styles.priceInfo}>
        <Text font="headline" fontWeight={300} color="error" colorWeight={500}>
          ${price}
        </Text>
        <Text font="bodyText" fontWeight={100} color="black" colorWeight={400}>
          / Person
        </Text>
      </View>
      <Button
        size="large"
        type="primary"
        label={'Booking'}
        onPress={onBookingPress}
        icon={'label-only'}
        addStyles={styles.minButtonSize}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginBottom: 24,
    paddingTop: 24,
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  minButtonSize: {
    minWidth: 175,
  },

  bookingInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 30,
  },
  bookingBtn: {
    minWidth: 175,
  },
})
export default BookingBottom
