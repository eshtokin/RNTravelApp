import React from 'react'
import {StatusBar, StyleSheet} from 'react-native'
import {LogoBlack} from '../../../../assets/icons/svg'
import Colors from '../../../utils/Colors'
import {useNavigation} from '@react-navigation/native'
import {Screens} from '../../../navigation/types'
import {SafeAreaView} from 'react-native-safe-area-context'
import store, {UserType} from '../../../store/RootStore'
import {LoginActionButtons, LoginInputSection} from '../components'
import SocialNetworkLogin from '../components/LoginSocialNetworks'

type LoginProps = {}
const Login: React.FC<LoginProps> = ({}) => {
  const navigation = useNavigation()
  const [checkboxValue, setCheckboxValue] = React.useState(false)
  const [inputValues, setInputValues] = React.useState<UserType>({
    email: '',
    password: '',
  })

  const changeInputValue = (filedName: keyof typeof inputValues) => {
    return (text: string) => {
      setInputValues({...inputValues, [filedName]: text})
    }
  }

  const setToggleCheckBox = (newValue: boolean) => setCheckboxValue(newValue)

  const onForgotPasswordPress = () =>
    navigation.navigate(Screens.ForgotPassword)

  const onCreateAccountHandler = () =>
    navigation.navigate(Screens.CreateAccount)

  const onSignInHandler = () => store.setUserInfo(inputValues)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.black[0]} />
      <LogoBlack />

      <LoginInputSection
        values={inputValues}
        onChangeEmail={changeInputValue('email')}
        onChangePassword={changeInputValue('password')}
        setToggleCheckBox={setToggleCheckBox}
        onForgotPasswordPress={onForgotPasswordPress}
      />

      <LoginActionButtons
        onCreateAccount={onCreateAccountHandler}
        onSignIn={onSignInHandler}
      />

      <SocialNetworkLogin />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.black[0],
    padding: 30,
  },
})

export default Login
