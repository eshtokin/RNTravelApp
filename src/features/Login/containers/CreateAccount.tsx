import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Button, Header} from '../../../components'
import Colors from '../../../utils/Colors'
import {SafeAreaView} from 'react-native-safe-area-context'
import Typography from '../../../utils/Typography'
import {
  CreateAccountEmail,
  CreateAccountName,
  CreateAccountOTP,
  CreateAccountPassword,
  CreateAccountSuccessfully,
} from '../components'
import {useNavigation} from '@react-navigation/native'
import {Screens} from '../../../navigation/types'

const STEPS = [
  {
    title: 'What’s is your name?',
    buttonLabel: 'Input Email',
  },
  {
    title: 'And, your email?',
    buttonLabel: 'Create Password',
  },
  {
    title: 'Create a password',
    buttonLabel: 'Verification',
  },
  {
    title: 'OTP Verification',
    buttonLabel: 'Submit',
  },
  {
    title: 'Successfully created an account',
    buttonLabel: 'Let’s Explore!',
  },
]

type CreateAccountProps = {}
const CreateAccount: React.FC<CreateAccountProps> = ({}) => {
  const navigation = useNavigation()
  const [currentStep, setCurrentStep] = React.useState(0)
  const submitButtonHandler = () => {
    if (currentStep + 1 === 5) {
      navigation.navigate(Screens.ChooseFavouritePlace)
    }
    setCurrentStep((currentStep + 1) % 5)
  }
  return (
    <SafeAreaView style={styles.container}>
      {currentStep < 4 && <Header withBackIcon withoutTitle />}
      <View style={styles.contentContainer}>
        {currentStep > 3 ? (
          <CreateAccountSuccessfully title={STEPS[currentStep].title} />
        ) : (
          <View>
            <Text
              style={{
                ...Typography.bodyText[300],
                color: Colors.black[400],
                marginTop: 30,
              }}>
              Create Your Account
            </Text>
            <Text style={styles.title}>{STEPS[currentStep].title}</Text>
            <View>
              {currentStep === 0 ? (
                <CreateAccountName />
              ) : currentStep === 1 ? (
                <CreateAccountEmail />
              ) : currentStep === 2 ? (
                <CreateAccountPassword />
              ) : currentStep === 3 ? (
                <CreateAccountOTP />
              ) : null}
            </View>
          </View>
        )}
        <Button
          type={'primary'}
          icon={'label-only'}
          size={'large'}
          label={STEPS[currentStep].buttonLabel}
          onPress={submitButtonHandler}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black[0],
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 30,
    justifyContent: 'space-between',
    backgroundColor: Colors.black[0],
  },
  title: {
    ...Typography.headline[700],
    color: Colors.black[900],
    marginTop: 10,
    marginBottom: 50,
  },
})
export default CreateAccount
