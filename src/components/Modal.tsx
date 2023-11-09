import {SafeAreaView, StyleSheet, View} from 'react-native'
import {Button, Text} from '.'
import Colors from '../utils/Colors'
import ChooseBookingDate from '../features/Home/template/ChooseBookingDate'
import {useState} from 'react'
import DetailBooking from '../features/Home/template/DetailBooking'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {HomeScreensPropsTypes, HomeScreens} from '../navigation/types'
import PaymentMethods from '../features/Home/template/PaymentMethods'

type ModalProps = NativeStackScreenProps<
  HomeScreensPropsTypes,
  HomeScreens.Modal
>
export const Modal: React.FC<ModalProps> = ({navigation}) => {
  const [step, setStep] = useState(1)
  const onBackPress = () => navigation.canGoBack() && navigation.goBack()
  const onConfirmPress = () => {
    setStep(step + 1)
  }
  return (
    <SafeAreaView style={styles.container}>
      {step === 1 && (
        <ChooseBookingDate
          onBackPress={onBackPress}
          onConfirmPress={onConfirmPress}
        />
      )}
      {step === 2 && <DetailBooking />}
      {step === 3 && <PaymentMethods />}
      <View
        style={{
          backgroundColor: Colors.black[900],
          height: 2,
          width: `${step * 25}%`,
        }}
      />
      <View style={styles.buttonContainer}>
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
        {step === 2 && (
          <>
            <View
              style={{flexDirection: 'row', gap: 5, alignItems: 'flex-end'}}>
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
              label={'Payment Method'}
              onPress={onConfirmPress}
              addStyles={styles.additionBtnStyles}
            />
          </>
        )}
        {step === 3 && (
          <>
            <View
              style={{flexDirection: 'row', gap: 5, alignItems: 'flex-end'}}>
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
              label={'Process Payment'}
              onPress={onConfirmPress}
              addStyles={styles.additionBtnStyles}
            />
          </>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.black[0],
  },
  additionBtnStyles: {
    minWidth: 160,
  },
})
export default Modal
