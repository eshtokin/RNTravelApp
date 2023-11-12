import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {useEffect, useState} from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated'
import {Button, Header, Text} from '.'
import BookingSuccessfully from '../features/Home/template/BookingSuccessfully'
import Card from '../features/Home/template/Card'
import ChooseBookingDate from '../features/Home/template/ChooseBookingDate'
import DetailBooking from '../features/Home/template/DetailBooking'
import PaymentMethods from '../features/Home/template/PaymentMethods'
import {HomeScreens, HomeScreensPropsTypes} from '../navigation/types'
import Colors from '../utils/Colors'
import SCREEN_SIZE from '../utils/ScreenSIze'

const titles = ['', '', 'Detail Booking', 'Payments Methods', 'Payment', '']
type ModalProps = NativeStackScreenProps<
  HomeScreensPropsTypes,
  HomeScreens.Modal
>
export const Modal: React.FC<ModalProps> = ({navigation}) => {
  const [step, setStep] = useState(1)
  const numberOfActiveSteps = 4
  const progressWidth = useSharedValue(0)
  const progressStep = SCREEN_SIZE.width / numberOfActiveSteps
  useEffect(() => {
    progressWidth.value = withTiming(step * progressStep)
  }, [step])

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
          style={{
            backgroundColor: Colors.black[900],
            height: 2,
            width: progressWidth,
          }}
        />
      )}
      <View
        style={[styles.buttonContainer, step < 5 && styles.oneButtonContainer]}>
        {step === 1 && (
          <>
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
          </>
        )}
        {step >= 2 && step <= 4 && (
          <>
            <View style={styles.priceWrapper}>
              <Text
                font="bodyText"
                fontWeight={100}
                color="black"
                colorWeight={400}>
                Total
              </Text>
              <Text
                font="headline"
                fontWeight={300}
                color="error"
                colorWeight={500}>
                $1490,00
              </Text>
            </View>
            <Button
              type={'primary'}
              icon={'label-only'}
              size={'large'}
              label={
                step === 2
                  ? 'Payment Method'
                  : step > 2 && step <= 4
                  ? 'Process Payment'
                  : ''
              }
              onPress={onConfirmPress}
              addStyles={styles.additionBtnStyles}
            />
          </>
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
  priceWrapper: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'flex-end',
  },
})
export default Modal
