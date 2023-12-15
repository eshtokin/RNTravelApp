import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button, Header} from '@components'
import {useNavigation} from '@react-navigation/native'
import store from '@store/RootStore'
import {Colors, Typography} from '@utils'
import {Screens} from '../../../navigation/types'
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
  const [currentStep, setCurrentStep] = React.useState(0)

  const [userFullName, setUserFullName] = useState({
    firstName: '',
    lastName: '',
  })
  const changeUserFullName =
    (field: keyof typeof userFullName) => (name: string) =>
      setUserFullName({...userFullName, [field]: name})

  const canSendFullName =
    userFullName.firstName.length > 1 && userFullName.lastName.length > 1

  const [email, setEmail] = useState('')
  const [shouldReceiveEmail, setShouldReceiveEmail] = useState(false)
  const [password, setPassword] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [timer, setTimer] = useState(60)

  const submitButtonHandler = () => {
    switch (currentStep) {
      case 0:
        store.user.setUserName(userFullName)
        break
      case 4:
        store.user.setEmail(email)
        // navigation.navigate(Screens.ChooseFavouritePlace)
        return
    }
    setCurrentStep(currentStep => currentStep + 1)
  }

  const onBackIconPress = () => {
    if (currentStep === 0) {
      navigation.goBack()
      return
    }
    setCurrentStep(currentStep => currentStep - 1)
  }

  const canSendEmail = email.length > 5
  const canSendPassword = password.length > 5
  const canSendOtpCode = otpCode.length === 4

  return (
    <SafeAreaView style={styles.container}>
      {currentStep < 4 && (
        <Header
          withBackIcon
          withoutTitle
          blackIconColor="black"
          onBackIconPress={onBackIconPress}
        />
      )}
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
                      userFullName={userFullName}
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
export default CreateAccount
