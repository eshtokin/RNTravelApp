import {View} from 'react-native'
import {Text} from '../../../components'

type PaymentProps = {
  label: string
}
const Payment: React.FC<PaymentProps> = ({label}) => {
  return (
    <View>
      <Text font="headline" fontWeight={300}>
        {label}
      </Text>
    </View>
  )
}
type PaymentMethodsProps = {}
const PaymentMethods: React.FC<PaymentMethodsProps> = () => {
  return (
    <View style={{flex: 1}}>
      {['Credit Card'].map(l => (
        <Payment label={l} />
      ))}
    </View>
  )
}
export default PaymentMethods
