import React from 'react'
import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Colors from '../utils/Colors'
import {
  HeartIconFilled,
  HeartIconOutlined,
  Location,
} from '../../assets/icons/svg'
import Rate from './Rate'
import Typography from '../utils/Typography'
import {Overlay} from '../../assets/decoration'
import {observer} from 'mobx-react-lite'
import {GeneratedPlace} from '../store/mock'

type DestinationProps = {
  item: GeneratedPlace
  // name: string
  // rate: number
  // location: string
  // inFavourites: boolean
  // photo: ImageSourcePropType
  onDestinationPress: () => void
  onFavIconPress: () => void
}
const Destination: React.FC<DestinationProps> = observer(
  ({
    item: {name, rate, location, country, inFavourites, photo},
    onDestinationPress,
    onFavIconPress,
  }) => (
    <Pressable style={styles.container} onPress={onDestinationPress}>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={styles.backImageStyle}
        source={photo}
        resizeMode="cover">
        <Pressable style={styles.favIconContainer} onPress={onFavIconPress}>
          {inFavourites ? (
            <HeartIconFilled />
          ) : (
            <HeartIconOutlined color={Colors.black[900]} />
          )}
        </Pressable>
        <View style={styles.overlayPosition}>
          <Overlay />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.locationContainer}>
            <Location />
            <Text style={styles.location}>{country}</Text>
          </View>
          <Rate value={rate} whiteValue />
        </View>
      </ImageBackground>
    </Pressable>
  ),
)

const styles = StyleSheet.create({
  container: {
    width: 186,
    height: 246,
    backgroundColor: Colors.black[100],
    borderRadius: 20,
  },
  imageBackground: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
  },
  backImageStyle: {
    borderRadius: 20,
  },
  overlayPosition: {
    position: 'absolute',
    zIndex: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden',
  },
  favIconContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black[0],
  },
  infoContainer: {
    width: 154,
    height: 65,
    justifyContent: 'space-between',
  },
  name: {
    ...Typography.headline[500],
    color: Colors.black[0],
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  location: {
    ...Typography.headline[100],
    color: Colors.black[0],
  },
  rate: {},
})

export default Destination
