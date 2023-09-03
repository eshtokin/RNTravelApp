import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Colors from '../utils/Colors'
import Typography from '../utils/Typography'
import {HeartIconFilled, HeartIconOutlined} from '../../assets/icons/svg'
import Rate from './Rate'

type PackageProps = {
  name: string
  description: string
  price: number
  rate: number
  inFavourite: boolean
  image: ImageSourcePropType
  onHeartIconPress: () => void
}
const Package: React.FC<PackageProps> = ({
  name,
  description,
  price,
  rate,
  image,
  inFavourite,
  onHeartIconPress,
}) => {
  return (
    <Pressable style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Pressable style={styles.heartIconContainer} onPress={onHeartIconPress}>
          {inFavourite ? <HeartIconFilled /> : <HeartIconOutlined />}
        </Pressable>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <Rate value={rate} />
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    gap: 14,
    borderWidth: 1,
    borderColor: Colors.black[100],
    borderRadius: 20,
  },
  image: {
    width: 86,
    height: 116,
    borderRadius: 10,
    backgroundColor: Colors.black[100],
  },
  infoContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  heartIconContainer: {
    position: 'absolute',
    right: 0,
  },
  name: {
    ...Typography.headline[300],
    color: Colors.black[900],
  },
  description: {
    ...Typography.bodyText[100],
    color: Colors.black[400],
  },
  price: {
    ...Typography.headline[200],
    color: Colors.error[500],
  },
})
export default Package