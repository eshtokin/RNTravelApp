import {Text} from 'react-native'
import {Input} from '../../../components'
import Typography from '../../../utils/Typography'
import Colors from '../../../utils/Colors'

type CreateAccountPasswordProps = {
  password: string
  onChangePassword: (text: string) => void
}
const CreateAccountPassword: React.FC<CreateAccountPasswordProps> = ({
  password,
  onChangePassword,
}) => {
  return (
    <>
      <Input
        label={'Password'}
        secureTextEntry
        value={password}
        onChangeText={onChangePassword}
      />
      <Text
        style={{
          ...Typography.bodyText[100],
          color: Colors.black[300],
        }}>
        Your password must include at least one symbol and be 8 or more
        characters long.
      </Text>
    </>
  )
}

export default CreateAccountPassword
