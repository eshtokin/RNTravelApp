import {StyleSheet, View} from 'react-native'
import {Button, Text} from '@components'

type DetailPaymentCardBottomProps = {
  confirmButtonLabel: string
  onConfirmPress: () => void
}
const DetailPaymentCardBottom: React.FC<DetailPaymentCardBottomProps> = ({
  confirmButtonLabel,
  onConfirmPress,
}) => {
  return (
    <>
      <View style={styles.priceWrapper}>
        <Text font="bodyText" fontWeight={100} color="black" colorWeight={400}>
          Total
        </Text>
        <Text font="headline" fontWeight={300} color="error" colorWeight={500}>
          $1490,00
        </Text>
      </View>
      <Button
        type={'primary'}
        icon={'label-only'}
        size={'large'}
        label={confirmButtonLabel}
        onPress={onConfirmPress}
        addStyles={styles.additionBtnStyles}
      />
    </>
  )
}

const styles = StyleSheet.create({
  additionBtnStyles: {
    minWidth: 160,
  },
  priceWrapper: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'flex-end',
  },
})

export default DetailPaymentCardBottom
