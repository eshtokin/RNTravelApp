import React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import Colors from '../../../utils/Colors'
import {Input} from '../../../components'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Typography from '../../../utils/Typography'

type LoginInputSectionProps = {
  values: {email: string; password: string}
  onChangeEmail: (text: string) => void
  onChangePassword: (text: string) => void
  setToggleCheckBox: (flag: boolean) => void
  onForgotPasswordPress: () => void
}
const LoginInputSection: React.FC<LoginInputSectionProps> = ({
  values,
  onChangeEmail,
  onChangePassword,
  setToggleCheckBox,
  onForgotPasswordPress,
}) => {
  return (
    <View style={styles.inputsContainer}>
      <Input label="Email" value={values.email} onChangeText={onChangeEmail} />
      <Input
        // secured
        label="Password"
        value={values.password}
        onChangeText={onChangePassword}
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
  //
  inputsContainer: {
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
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

export default LoginInputSection
