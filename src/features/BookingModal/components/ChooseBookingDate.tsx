import {View, StyleSheet} from 'react-native'
import {CalendarList} from 'react-native-calendars'
import {Text} from '../../../components'
import Colors from '../../../utils/Colors'

type ChooseBookingDateProps = {}
const ChooseBookingDate: React.FC<ChooseBookingDateProps> = ({}) => {
  return (
    <>
      <View style={styles.padding}>
        <Text font="headline" fontWeight={400} style={styles.screenTitle}>
          Choose Booking Date
        </Text>
      </View>
      <View style={{flex: 1}}>
        <CalendarList
          current={new Date().toString()}
          pastScrollRange={0}
          futureScrollRange={24}
          monthFormat="MMMM"
          markingType="period"
          markedDates={{
            '2023-11-16': {
              selected: true,
              startingDay: true,
              color: Colors.brand[500],
            },
            '2023-11-17': {
              color: Colors.brand[100],
            },
            '2023-11-18': {
              color: Colors.brand[100],
            },
            '2023-11-19': {
              color: Colors.brand[100],
            },
            '2023-11-20': {
              selected: true,
              endingDay: true,
              color: Colors.brand[500],
            },
          }}
        />
      </View>
      {/* <View style={styles.buttonContainer}>
        <Button
          type={'secondary'}
          icon={'label-only'}
          size={'large'}
          label={'Back'}
          onPress={onBackPress}
          addStyles={styles.additionBtnStyles}
        />
        <Button
          type={'primary'}
          icon={'label-only'}
          size={'large'}
          label={'Confirm'}
          onPress={onConfirmPress}
          addStyles={styles.additionBtnStyles}
        />
      </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black[0],
  },
  screenTitle: {
    alignSelf: 'center',
  },
  padding: {
    padding: 20,
    gap: 20,
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.black[0],
  },
  additionBtnStyles: {
    minWidth: 160,
  },
})
export default ChooseBookingDate
