import {View, Text, StyleSheet} from 'react-native'
import {Input, Switch} from '../../../components'
import Typography from '../../../utils/Typography'
import Colors from '../../../utils/Colors'

type CreateAccountEmailProps = {
  email: string
  shouldReceiveEmail: boolean
  onChangeEmail: (email: string) => void
  onToggleShouldReceiveEmail: (flag: boolean) => void
}
const CreateAccountEmail: React.FC<CreateAccountEmailProps> = ({
  email,
  onChangeEmail,
  shouldReceiveEmail,
  onToggleShouldReceiveEmail,
}) => {
  return (
    <>
      <Input label={'Email'} value={email} onChangeText={onChangeEmail} />
      <View style={styles.wrapper}>
        <Text style={styles.condition}>
          I’d like to received marketing and policy communication from traver
          and its partners.
        </Text>
        <Switch
          value={shouldReceiveEmail}
          onToggle={onToggleShouldReceiveEmail}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  condition: {
    ...Typography.bodyText[100],
    color: Colors.black[300],
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
})
export default CreateAccountEmail
