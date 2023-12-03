import {View, Text} from 'react-native'
import {Input, Switch} from '../../../components'
import Typography from '../../../utils/Typography'
import Colors from '../../../utils/Colors'

type CreateAccountEmailProps = {}
const CreateAccountEmail: React.FC<CreateAccountEmailProps> = ({}) => {
  return (
    <>
      <Input
        label={'Email'}
        value={''}
        onChangeText={function (text: string): void {
          throw new Error('Function not implemented.')
        }}
      />
      <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 20}}>
        <Text
          style={{
            ...Typography.bodyText[100],
            color: Colors.black[300],
            flex: 1,
          }}>
          I’d like to received marketing and policy communication from traver
          and its partners.
        </Text>
        <Switch
          value={false}
          onToggle={function (flag: boolean): void {
            throw new Error('Function not implemented.')
          }}
        />
      </View>
    </>
  )
}

export default CreateAccountEmail
