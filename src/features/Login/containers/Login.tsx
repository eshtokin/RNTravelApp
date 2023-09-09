import React from 'react'
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  LogoBlack,
} from '../../../../assets/icons/svg'
import Colors from '../../../utils/Colors'
import {Button, Input} from '../../../components'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Typography from '../../../utils/Typography'
import {useNavigation} from '@react-navigation/native'
import {Screens} from '../../../navigation/types'

type LoginProps = {}
const Login: React.FC<LoginProps> = ({}) => {
  const navigation = useNavigation()
  const [checkboxValue, setCheckboxValue] = React.useState(false)
  const [inputValues, setInputValues] = React.useState({
    email: '',
    password: '',
  })

  const changeInputValue = (filedName: keyof typeof inputValues) => {
    return (text: string) => {
      setInputValues({...inputValues, [filedName]: text})
    }
  }

  const setToggleCheckBox = (newValue: boolean) => {
    setCheckboxValue(newValue)
  }

  const onForgotPasswordPress = () => {
    navigation.navigate(Screens.ForgotPassword)
  }

  const onSignInHandler = () => {
    console.log(
      JSON.stringify(
        {
          checkboxValue,
          ...inputValues,
        },
        null,
        2,
      ),
    )
  }
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.black[0]} />
      <LogoBlack />

      <InputSection
        values={inputValues}
        onChangeEmail={changeInputValue('email')}
        onChangePassword={changeInputValue('password')}
        setToggleCheckBox={setToggleCheckBox}
        onForgotPasswordPress={onForgotPasswordPress}
      />

      <View style={styles.buttonWrapper}>
        <Button
          type={'secondary'}
          icon={'label-only'}
          size={'large'}
          label={'Create Account'}
          onPress={() => {}}
        />
        <Button
          type={'primary'}
          icon={'label-only'}
          size={'large'}
          label={'Sign In'}
          onPress={onSignInHandler}
        />
      </View>
      <View style={styles.socialWrapper}>
        <InstagramIcon />
        <GoogleIcon />
        <FacebookIcon />
      </View>
    </ScrollView>
  )
}

type InputSectionProps = {
  values: {email: string; password: string}
  onChangeEmail: (text: string) => void
  onChangePassword: (text: string) => void
  setToggleCheckBox: (flag: boolean) => void
  onForgotPasswordPress: () => void
}
const InputSection: React.FC<InputSectionProps> = ({
  values,
  onChangeEmail,
  onChangePassword,
  setToggleCheckBox,
  onForgotPasswordPress,
}) => {
  return (
    <View style={styles.inputsContainer}>
      <Input label="Email" value={values.email} onChageText={onChangeEmail} />
      <Input
        secured
        label="Password"
        value={values.password}
        onChageText={onChangePassword}
      />
      <View style={styles.checkboxWrapper}>
        <BouncyCheckbox
          size={20}
          textComponent={
            <Text
              style={{
                marginLeft: 5,
                ...Typography.headline[200],
                color: Colors.black[300],
              }}>
              Remember me
            </Text>
          }
          iconImageStyle={styles.iconImageStyle}
          iconStyle={styles.iconStyle}
          innerIconStyle={styles.innerIconStyle}
          textStyle={{
            ...Typography.headline[200],
            color: Colors.black[300],
          }}
          onPress={setToggleCheckBox}
          useNativeDriver
        />
        <Pressable onPress={onForgotPasswordPress}>
          <Text style={{...Typography.headline[200], color: Colors.black[300]}}>
            Forgot password
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.black[0],
    padding: 30,
  },
  buttonWrapper: {
    width: '100%',
    gap: 20,
    marginTop: 100,
  },
  socialWrapper: {flexDirection: 'row', gap: 50, marginTop: 50},
  //
  inputsContainer: {
    width: '100%',
    marginTop: 100,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  innerIconStyle: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.black[200],
  },
  iconStyle: {
    backgroundColor: Colors.black[0],
  },
  iconImageStyle: {tintColor: Colors.black[300]},
})
export default Login
