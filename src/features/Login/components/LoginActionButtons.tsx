import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Button} from '@components'

type LoginActionButtonsProps = {
  loginActionEnebled: boolean
  onCreateAccount: () => void
  onSignIn: () => void
}
const LoginActionButtons: React.FC<LoginActionButtonsProps> = ({
  loginActionEnebled,
  onCreateAccount,
  onSignIn,
}) => {
  return (
    <View style={styles.buttonWrapper}>
      <Button
        type={'secondary'}
        icon={'label-only'}
        size={'large'}
        label={'Create Account'}
        onPress={onCreateAccount}
      />
      <Button
        type={'primary'}
        icon={'label-only'}
        size={'large'}
        label={'Sign In'}
        onPress={onSignIn}
        disabled={!loginActionEnebled}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    gap: 20,
  },
})

export default LoginActionButtons
