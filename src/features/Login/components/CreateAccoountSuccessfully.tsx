import {StyleSheet, Text, View} from 'react-native'
import {CreateAccountSuccessfullyIcon} from '../../../../assets/icons/svg'
import Typography from '../../../utils/Typography'
import Colors from '../../../utils/Colors'

type CreateAccountSuccessfullyProps = {title: string}
const CreateAccountSuccessfully: React.FC<CreateAccountSuccessfullyProps> = ({
  title,
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <View style={{alignSelf: 'center'}}>
        <CreateAccountSuccessfullyIcon />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={{
          ...Typography.bodyText[300],
          color: Colors.black[400],
          marginTop: 20,
        }}>
        After this you can explore any place you want. enjoy it!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    ...Typography.headline[700],
    color: Colors.black[900],
    marginTop: 50,
  },
})
export default CreateAccountSuccessfully
