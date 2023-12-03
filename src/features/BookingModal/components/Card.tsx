import {Image, StyleSheet, View} from 'react-native'
import {CreditCardImage} from '../../../../assets/images'
import {Input, Text} from '../../../components'

type CardProps = {}
const Card: React.FC<CardProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <Image source={CreditCardImage} />
        <View style={styles.infoWrapper}>
          <Text font="headline" fontWeight={200} color="black" colorWeight={0}>
            Pristia Candra
          </Text>
          <View style={styles.cardInfo}>
            <Text
              font="headline"
              fontWeight={200}
              color="black"
              colorWeight={0}>
              Master Card
            </Text>
            <Text
              font="headline"
              fontWeight={200}
              color="black"
              colorWeight={0}>
              465 6453 6453 354
            </Text>
            <Text
              font="headline"
              fontWeight={200}
              color="black"
              colorWeight={0}>
              $ 3458,90
            </Text>
          </View>
        </View>
      </View>
      <Input
        label={'Card Number'}
        value={'465 6453 6453 354'}
        onChangeText={function (text: string): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Input
        label={'CVV'}
        value={''}
        onChangeText={function (text: string): void {
          throw new Error('Function not implemented.')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    gap: 30,
    marginTop: 20,
  },
  cardWrapper: {
    alignItems: 'center',
  },
  infoWrapper: {
    position: 'absolute',
    top: 30,
    bottom: 30,
    left: 30,
    justifyContent: 'space-between',
  },
  cardInfo: {gap: 10},
})

export default Card
