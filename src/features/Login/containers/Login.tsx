import {useNavigation} from '@react-navigation/native'
import {useState} from 'react'
import {StatusBar, StyleSheet} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {SafeAreaView} from 'react-native-safe-area-context'
import {LogoBlack} from '../../../../assets/icons/svg'
import {Screens} from '../../../navigation/types'
import store from '../../../store/RootStore'
import {Colors} from '@utils'
import {LoginActionButtons, LoginInputSection} from '../components'
import SocialNetworkLogin from '../components/LoginSocialNetworks'

type LoginProps = {}
const Login: React.FC<LoginProps> = ({}) => {
  const navigation = useNavigation()
  const [, setCheckboxValue] = useState(false)
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  })

  const changeInputValue =
    (filedName: keyof typeof inputValues) => (text: string) => {
      setInputValues({...inputValues, [filedName]: text})
    }

  const setToggleCheckBox = (newValue: boolean) => setCheckboxValue(newValue)

  const onForgotPasswordPress = () =>
    navigation.navigate(Screens.ForgotPassword)

  const onCreateAccountPress = () => navigation.navigate(Screens.CreateAccount)

  const onSignInHandler = () => store.user.setEmail(inputValues.email)
  const canPressLogin =
    inputValues.email.length > 5 && inputValues.password.length > 5

  return (
    <KeyboardAwareScrollView
      bounces={false}
      contentContainerStyle={styles.keyboardAvoidingWrapper}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={Colors.black[0]}
        />
        <LogoBlack />
        <LoginInputSection
          values={inputValues}
          onChangeEmail={changeInputValue('email')}
          onChangePassword={changeInputValue('password')}
          setToggleCheckBox={setToggleCheckBox}
          onForgotPasswordPress={onForgotPasswordPress}
        />
        <LoginActionButtons
          loginActionEnebled={canPressLogin}
          onCreateAccount={onCreateAccountPress}
          onSignIn={onSignInHandler}
        />

        <SocialNetworkLogin />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  keyboardAvoidingWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.black[0],
    padding: 30,
  },
})

export default Login
