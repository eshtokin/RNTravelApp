import {Input} from '../../../components'

type CreateAccountNameProps = {}
const CreateAccountName: React.FC<CreateAccountNameProps> = ({}) => {
  return (
    <>
      <Input
        label={'First Name'}
        value={''}
        onChangeText={function (text: string): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Input
        label={'Last Name'}
        value={''}
        onChangeText={function (text: string): void {
          throw new Error('Function not implemented.')
        }}
      />
    </>
  )
}

export default CreateAccountName
