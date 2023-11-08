import React from 'react'
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native'
import {observer} from 'mobx-react-lite'
import Rate from './Rate'
import Text from './Text'
import {GeneratedPlace} from '../store/mockData/places'
import Colors from '../utils/Colors'
import {HeartIcon, Location} from '../../assets/icons/svg'
import LinearGradient from 'react-native-linear-gradient'
import Heart from './Heart'

const OVERLAY_COLORS = [
  Colors.black.transparent,
  Colors.black[500],
  Colors.black[700],
]

type DestinationProps = {
  item: GeneratedPlace
  onDestinationPress: () => void
  onFavIconPress: () => void
}
const Destination: React.FC<DestinationProps> = observer(
  ({
    item: {name, rate, country, inFavourites, photo},
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
          <Heart active={inFavourites} size={20} />
        </Pressable>
        <LinearGradient
          colors={OVERLAY_COLORS}
          style={styles.overlayPosition}
        />
        <View style={styles.infoContainer}>
          <Text
            font="headline"
            fontWeight={500}
            color="black"
            colorWeight={0}
            numberOfLines={1}>
            {name}
          </Text>
          <View style={styles.locationContainer}>
            <Location />
            <Text
              style={styles.locationText}
              font="headline"
              fontWeight={100}
              color="black"
              colorWeight={0}
              numberOfLines={1}>
              {country}
            </Text>
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
    right: 0,
    bottom: 0,
    left: 0,
    height: '50%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    opacity: 0.7,
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
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  locationText: {
    width: '87%',
  },
  rate: {},
})

export default Destination
