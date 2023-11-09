import {SafeAreaView} from 'react-native'
import {Text} from '.'

type ModalProps = {}
const Modal: React.FC<ModalProps> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text font="headline" fontWeight={400}>
        Choose Booking Date
      </Text>
    </SafeAreaView>
  )
}

export default Modal
