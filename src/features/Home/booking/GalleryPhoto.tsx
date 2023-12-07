import {View, Image, StyleSheet} from 'react-native'
import {Text} from '@components'
import {
  SmallBooking1,
  SmallBooking2,
  SmallBooking3,
} from '../../../../assets/images'

const SMALL_IMAGES = [SmallBooking1, SmallBooking2, SmallBooking3]

type GalleryPhotoProps = {}
const GalleryPhoto: React.FC<GalleryPhotoProps> = ({}) => {
  return (
    <View style={styles.listContainer}>
      {SMALL_IMAGES.map((_, index) => (
        <View key={`galery-${index}`} style={styles.listElement}>
          <Image source={_} />
          <View style={styles.textWrapper}>
            {index === 2 && (
              <Text
                font="headline"
                fontWeight={600}
                color="black"
                colorWeight={0}>
                + 20
              </Text>
            )}
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
  },
  listElement: {
    borderRadius: 20,
    overflow: 'hidden',
    width: 90,
    height: 90,
  },
  textWrapper: {
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
})

export default GalleryPhoto
