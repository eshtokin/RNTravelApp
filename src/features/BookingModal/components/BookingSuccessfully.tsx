import {StyleSheet, View} from 'react-native'
import {PalmBeach} from '../../../../assets/icons/svg'
import {Text} from '@components'

type BookingSuccessfullyProps = {}
const BookingSuccessfully: React.FC<BookingSuccessfullyProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <PalmBeach />
      </View>
      <Text font="headline" fontWeight={800} style={styles.title}>
        Booking Successfully
      </Text>
      <Text font="bodyText" fontWeight={300} style={styles.text}>
        Get everything ready until it's time to go on a trip!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 30,
    marginBottom: 60,
  },
  imageWrapper: {
    alignSelf: 'center',
  },
  title: {
    marginTop: 90,
  },
  text: {
    marginTop: 20,
  },
})
export default BookingSuccessfully
