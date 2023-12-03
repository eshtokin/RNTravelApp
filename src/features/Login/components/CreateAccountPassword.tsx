import {Text} from 'react-native'
import {Input} from '../../../components'
import Typography from '../../../utils/Typography'
import Colors from '../../../utils/Colors'

type CreateAccountPasswordProps = {}
const CreateAccountPassword: React.FC<CreateAccountPasswordProps> = ({}) => {
  return (
    <>
      <Input
        label={'Password'}
        // secured
        value={''}
        onChangeText={function (text: string): void {
          throw new Error('Function not implemented.')
        }}
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
