import {useNavigation} from '@react-navigation/native'
import {observer} from 'mobx-react-lite'
import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button, Header} from '../../../components'
import {Screens} from '../../../navigation/types'
import store from '../../../store/RootStore'
import Colors from '../../../utils/Colors'
import Typography from '../../../utils/Typography'
import {
  CreateAccountEmail,
  CreateAccountName,
  CreateAccountOTP,
  CreateAccountPassword,
  CreateAccountSuccessfully,
} from '../components'
import {CREATE_ACCOUNT_STEPS} from '../constants'

type CreateAccountProps = {}
const CreateAccount: React.FC<CreateAccountProps> = ({}) => {
  const navigation = useNavigation()

  const {email, firstName, lastName, setEmail, setUserName} = store.user

  const [currentStep, setCurrentStep] = useState(0)
  const [shouldReceiveEmail, setShouldReceiveEmail] = useState(false)
  const [password, setPassword] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [timer, setTimer] = useState(60)

  const changeUserFullName =
    (field: 'firstName' | 'lastName') => (name: string) =>
      setUserName({[field]: name})

  const submitButtonHandler = () => {
    if (currentStep === 4) {
      navigation.navigate(Screens.ChooseFavouritePlace)
      return
    }
    setCurrentStep(currentStep => currentStep + 1)
  }

  const canSendFullName = firstName.length > 1 && lastName.length > 1
  const canSendEmail = email.length > 5
  const canSendPassword = password.length > 5
  const canSendOtpCode = otpCode.length === 4

  return (
    <SafeAreaView style={styles.container}>
      {currentStep < 4 && <Header withBackIcon withoutTitle />}
      <View style={styles.contentContainer}>
        {currentStep > 3 ? (
          <CreateAccountSuccessfully
            title={CREATE_ACCOUNT_STEPS[currentStep].title}
          />
        ) : (
          <View>
            <Text style={styles.secondTitle}>Create Your Account</Text>
            <Text style={styles.title}>
              {CREATE_ACCOUNT_STEPS[currentStep].title}
            </Text>
            <View>
              {
                {
                  0: (
                    <CreateAccountName
                      userFullName={{lastName, firstName}}
                      onChangeFirstname={changeUserFullName('firstName')}
                      onChangeLastName={changeUserFullName('lastName')}
                    />
                  ),
                  1: (
                    <CreateAccountEmail
                      email={email}
                      onChangeEmail={setEmail}
                      shouldReceiveEmail={shouldReceiveEmail}
                      onToggleShouldReceiveEmail={setShouldReceiveEmail}
                    />
                  ),
                  2: (
                    <CreateAccountPassword
                      password={password}
                      onChangePassword={setPassword}
                    />
                  ),
                  3: (
                    <CreateAccountOTP
                      otpCode={otpCode}
                      onChangeOtp={setOtpCode}
                      timer={timer}
                    />
                  ),
                }[currentStep]
              }
            </View>
          </View>
        )}
        <Button
          type={'primary'}
          icon={'label-only'}
          size={'large'}
          label={CREATE_ACCOUNT_STEPS[currentStep].buttonLabel}
          disabled={
            !{
              0: canSendFullName,
              1: canSendEmail,
              2: canSendPassword,
              3: canSendOtpCode,
              4: true,
            }[currentStep]
          }
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
  secondTitle: {
    ...Typography.bodyText[300],
    color: Colors.black[400],
    marginTop: 30,
  },
})

export default observer(CreateAccount)
