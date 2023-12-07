import {StyleSheet} from 'react-native'
import {Button} from '@components'

type ChooseBookingDateBottomProps = {
  onBackPress: () => void
  onConfirmPress: () => void
}
const ChooseBookingDateBottom: React.FC<ChooseBookingDateBottomProps> = ({
  onBackPress,
  onConfirmPress,
}) => {
  return (
    <>
      <Button
        type={'secondary'}
        icon={'label-only'}
        size={'large'}
        label={'Back'}
        onPress={onBackPress}
        addStyles={styles.additionBtnStyles}
      />
      <Button
        type={'primary'}
        icon={'label-only'}
        size={'large'}
        label={'Confirm'}
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
})

export default ChooseBookingDateBottom
