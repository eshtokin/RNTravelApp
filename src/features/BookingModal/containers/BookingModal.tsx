import {useEffect, useState} from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated'
import {Button, Header} from '@components'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {Colors, SCREEN_SIZE} from '@utils'
import {
  BookingSuccessfully,
  Card,
  ChooseBookingDate,
  DetailBooking,
  PaymentMethods,
} from './../components'
import {RootStackProps, Screens} from '../../../navigation/types'
import ChooseBookingDateBottom from '../components/ChooseBookingDateBottom'
import DetailPaymentCardBottom from '../components/DetailPaymentCardBottom'

const titles = ['', '', 'Detail Booking', 'Payments Methods', 'Payment', '']

type BookingModalProps = NativeStackScreenProps<RootStackProps, Screens.Modal>
export const BookingModal: React.FC<BookingModalProps> = ({navigation}) => {
  const [step, setStep] = useState(1)
  const numberOfActiveSteps = 4
  const progressWidth = useSharedValue(0)
  const progressStep = SCREEN_SIZE.width / numberOfActiveSteps
  useEffect(() => {
    progressWidth.value = withTiming(step * progressStep)
  }, [progressStep, progressWidth, step])

  const onBackPress = () => navigation.canGoBack() && navigation.goBack()
  const onConfirmPress = () => {
    const nextStep = step >= 5 ? 1 : step + 1
    setStep(nextStep)
  }
  return (
    <SafeAreaView style={styles.container}>
      {step > 1 && step < 5 && (
        <Header withBackIcon blackIconColor="black" title={titles[step]} />
      )}
      {step === 1 && <ChooseBookingDate />}
      {step === 2 && <DetailBooking />}
      {step === 3 && <PaymentMethods />}
      {step === 4 && <Card />}
      {step === 5 && <BookingSuccessfully />}
      {step < 5 && (
        <Animated.View
          style={[
            {
              width: progressWidth,
            },
            styles.progress,
          ]}
        />
      )}
      <View
        style={[styles.buttonContainer, step < 5 && styles.oneButtonContainer]}>
        {step === 1 && (
          <ChooseBookingDateBottom
            onBackPress={onBackPress}
            onConfirmPress={onConfirmPress}
          />
        )}
        {step >= 2 && step <= 4 && (
          <DetailPaymentCardBottom
            confirmButtonLabel={
              step === 2
                ? 'Payment Method'
                : step > 2 && step <= 4
                ? 'Process Payment'
                : ''
            }
            onConfirmPress={onConfirmPress}
          />
        )}
        {step === 5 && (
          <Button
            type={'primary'}
            icon={'label-only'}
            size={'large'}
            label={'Explore Other Places'}
            onPress={onConfirmPress}
          />
        )}
      </View>
    </SafeAreaView>
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
    backgroundColor: Colors.black[0],
  },
  oneButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  additionBtnStyles: {
    minWidth: 160,
  },
  progress: {
    backgroundColor: Colors.black[900],
    height: 2,
  },
})

export default BookingModal
