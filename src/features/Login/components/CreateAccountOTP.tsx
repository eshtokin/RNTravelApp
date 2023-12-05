import {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {CodeField, Cursor} from 'react-native-confirmation-code-field'
import Colors from '../../../utils/Colors'
import Typography from '../../../utils/Typography'

type CreateAccountOTPProps = {
  otpCode: string
  onChangeOtp: (text: string) => void
  timer: number
}
const CreateAccountOTP: FC<CreateAccountOTPProps> = ({
  otpCode,
  onChangeOtp,
  timer,
}) => {
  return (
    <>
      <CodeField
        // ref={ref}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={otpCode}
        onChangeText={onChangeOtp}
        cellCount={4}
        rootStyle={styles.inputRootStyle}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View key={'OPT-' + index} style={styles.numberWrapper}>
            <Text key={index} style={styles.text}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <View style={styles.timerWrapper}>
        <Text
          style={{
            ...Typography.bodyText[100],
            color: Colors.black[300],
            flex: 1,
          }}>
          Send code reload in
        </Text>
        <Text
          style={{
            ...Typography.bodyText[100],
            color: Colors.black[300],
          }}>
          {timer === 60 ? '1:00' : `0:${timer}`}
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  inputRootStyle: {
    marginBottom: 27,
    marginTop: 12,
  },
  numberWrapper: {
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 17,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.brand[500],
  },
  text: {
    width: 30,
    textAlign: 'center',
    ...Typography.bodyText[200],
    color: Colors.black[900],
  },
  timerWrapper: {flexDirection: 'row'},
})

export default CreateAccountOTP
