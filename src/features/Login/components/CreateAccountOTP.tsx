import React from 'react'
import {Text, View} from 'react-native'
import {CodeField, Cursor} from 'react-native-confirmation-code-field'
import Colors from '../../../utils/Colors'
import Typography from '../../../utils/Typography'

type CreateAccountOTPProps = {}
const CreateAccountOTP: React.FC<CreateAccountOTPProps> = ({}) => {
  const [otp, setOtp] = React.useState('')
  return (
    <>
      <CodeField
        // ref={ref}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={otp}
        onChangeText={setOtp}
        cellCount={4}
        rootStyle={{marginBottom: 27}}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={'OPT-' + index}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 17,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: Colors.brand[500],
            }}>
            <Text
              key={index}
              style={[
                {
                  width: 30,
                  textAlign: 'center',
                  ...Typography.bodyText[200],
                  color: Colors.black[900],
                },
              ]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <View style={{flexDirection: 'row'}}>
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
          1:00
        </Text>
      </View>
    </>
  )
}

export default CreateAccountOTP
