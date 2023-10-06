import {StyleSheet, View} from 'react-native'
import {Button, Text} from '../../../components'

type BookingBottomProps = {price: number; onBookingPress: () => void}
const BookingBottom: React.FC<BookingBottomProps> = ({
  price,
  onBookingPress,
}) => {
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
})
export default BookingBottom
