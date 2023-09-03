import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {StarIcon} from '../../assets/icons/svg'
import Typography from '../utils/Typography'
import Colors from '../utils/Colors'

type RateProps = {
  value: number
  whiteValue?: boolean
  size?: 'small' | 'medium' | 'large'
}
const Rate: React.FC<RateProps> = ({
  value,
  whiteValue = false,
  size = 'small',
}) => {
  return (
    <View style={styles.rateContainer}>
      {Array(5)
        .fill(undefined)
        .map((_, index) => (
          <StarIcon
            key={index.toString()}
            filled={index - value < 0}
            size={size}
          />
        ))}
      <Text style={[styles.rate, whiteValue && styles.whiteTextColor]}>
        {value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rate: {
    ...Typography.heading[200],
    color: Colors.black[900],
  },
  whiteTextColor: {
    color: Colors.black[0],
  },
})
export default Rate
