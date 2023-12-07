import {FunctionComponent, useState} from 'react'
import {Pressable, StyleSheet, View} from 'react-native'
import {Text} from '@components'
import {Colors} from '@utils'
import {
  AppleIcon,
  CircleChecked,
  CreditCardicon,
  PaypallIcon,
} from '../../../../assets/icons/svg'

const PAYMENT_METHODS = [
  {label: 'Credit Card', icon: CreditCardicon},
  {label: 'Paypall', icon: PaypallIcon},
  {label: 'Apple Pay', icon: AppleIcon},
] as const

type PaymentVarianProps = {
  label: string
  active: boolean
  Icon: FunctionComponent
  onPress: () => void
}
const PaymentVariant: React.FC<PaymentVarianProps> = ({
  label,
  active,
  Icon,
  onPress,
}) => {
  return (
    <Pressable
      style={[styles.container, active && styles.activeContainer]}
      onPress={onPress}>
      <View style={styles.paymentIcon}>{<Icon />}</View>
      <Text font="headline" fontWeight={300} style={styles.label}>
        {label}
      </Text>
      <View style={{}}>{active && <CircleChecked />}</View>
    </Pressable>
  )
}

type PaymentMethodsProps = {}
const PaymentMethods: React.FC<PaymentMethodsProps> = () => {
  const [paymentMethods, setPaymentMethods] = useState(
    PAYMENT_METHODS.map(pm => ({...pm, active: false})),
  )
  const onPaymentPress = (label: string) => {
    setPaymentMethods(
      paymentMethods.map(pm => ({...pm, active: pm.label === label})),
    )
  }
  return (
    <View style={styles.paymentListContainer}>
      {/* <Text font="headline" fontWeight={400} style={styles.screenTitle}>
        Payment Methods
      </Text> */}
      {paymentMethods.map(l => (
        <PaymentVariant
          key={l.label}
          label={l.label}
          active={l.active}
          Icon={l.icon}
          onPress={() => onPaymentPress(l.label)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  paymentListContainer: {
    flex: 1,
    gap: 30,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  screenTitle: {
    alignSelf: 'center',
  },
  // Payment button
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    gap: 10,
    height: 80,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.black[100],
  },
  activeContainer: {
    borderColor: Colors.success[500],
  },
  label: {flex: 1},
  paymentIcon: {},
  activeIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'grey',
    borderRadius: 15,
  },
})

export default PaymentMethods
