import {Input} from '../../../components'

type CreateAccountNameProps = {
  userFullName: {firstName: string; lastName: string}
  onChangeFirstname: (text: string) => void
  onChangeLastName: (text: string) => void
}
const CreateAccountName: React.FC<CreateAccountNameProps> = ({
  userFullName,
  onChangeFirstname,
  onChangeLastName,
}) => {
  return (
    <>
      <Input
        label={'First Name'}
        value={userFullName.firstName}
        onChangeText={onChangeFirstname}
      />
      <Input
        label={'Last Name'}
        value={userFullName.lastName}
        onChangeText={onChangeLastName}
      />
    </>
  )
}

export default CreateAccountName
