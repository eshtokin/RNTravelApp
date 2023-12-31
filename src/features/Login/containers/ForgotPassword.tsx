import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'
import {Button, Header, Input} from '../../../components'
import Typography from '../../../utils/Typography'
import Colors from '../../../utils/Colors'

type ForgotPasswordProps = {}
const ForgotPassword: React.FC<ForgotPasswordProps> = ({}) => {
  const [email, setEmail] = React.useState('')
  const insets = useSafeAreaInsets()

  const onSubmitHandler = () => {}

  const canSubmitEmail = email.length > 5
  return (
    <SafeAreaView
      style={[styles.container, {paddingBottom: 20 + insets.bottom}]}>
      <Header withBackIcon withoutTitle blackIconColor="black" />
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={{...Typography.bodyText[300], color: Colors.black[400]}}>
            Input Your Email
          </Text>

          <Text style={styles.title}>Forgot Your Password?</Text>
          <Input label={'Email'} value={email} onChangeText={setEmail} />
        </View>
        <View style={styles.inputWrapper}>
          <Button
            type="primary"
            icon="label-only"
            size="large"
            onPress={onSubmitHandler}
            label={'Submit'}
            disabled={!canSubmitEmail}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black[0],
  },
  contentContainer: {flex: 1, paddingHorizontal: 30},
  title: {
    ...Typography.headline[700],
    color: Colors.black[900],
    marginTop: 10,
    marginBottom: 50,
  },
  infoContainer: {marginTop: 30},
  inputWrapper: {flex: 1, justifyContent: 'flex-end'},
})

export default ForgotPassword
