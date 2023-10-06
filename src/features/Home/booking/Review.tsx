import {StyleSheet, View} from 'react-native'
import {Rate, Text} from '../../../components'
import {Review as ReviewClass} from '../../../store/mockData/reviews'

type ReviewProps = {
  review: ReviewClass
}
const Review: React.FC<ReviewProps> = ({review}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <View style={styles.infoCol}>
        <View style={styles.nameAndDateRow}>
          <Text font="headline" fontWeight={300}>
            {review.name}
          </Text>
          <Text
            font="headline"
            fontWeight={200}
            color="black"
            colorWeight={400}>
            {review.date}
          </Text>
        </View>
        <Rate value={review.rate} whiteValue />
        <Text font="bodyText" fontWeight={200}>
          {review.comment}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
  },
  avatar: {
    marginTop: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'grey',
  },
  infoCol: {
    width: '85%',
  },
  nameAndDateRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
})
export default Review
