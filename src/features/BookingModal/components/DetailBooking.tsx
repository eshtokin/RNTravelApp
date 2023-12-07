import {StyleSheet, View} from 'react-native'
import {Input} from '@components'

type DetailBookingProps = {}
const DetailBooking: React.FC<DetailBookingProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        {/* <Text font="headline" fontWeight={400} style={styles.screenTitle}>
          Detail Booking
        </Text> */}
        <Input
          label={'Person Responsible'}
          value={'Pristia'}
          onChangeText={function (text: string): void {
            throw new Error('Function not implemented.')
          }}
        />
        <Input
          label={'Contact Info'}
          value={'+62039120102012031'}
          onChangeText={function (text: string): void {
            throw new Error('Function not implemented.')
          }}
        />
        <Input
          label={'Member'}
          value={'2 Member'}
          onChangeText={function (text: string): void {
            throw new Error('Function not implemented.')
          }}
        />
        <Input
          label={'Type ID'}
          value={'ID Card'}
          onChangeText={function (text: string): void {
            throw new Error('Function not implemented.')
          }}
        />
        <Input
          label={'Number ID'}
          value={'0210312013103003010303'}
          onChangeText={function (text: string): void {
            throw new Error('Function not implemented.')
          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenTitle: {
    alignSelf: 'center',
  },
  padding: {
    padding: 20,
    gap: 30,
  },
})

export default DetailBooking
