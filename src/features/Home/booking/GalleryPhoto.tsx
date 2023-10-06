import {View} from 'react-native'
import {Text} from '../../../components'

type GalleryPhotoProps = {}
const GalleryPhoto: React.FC<GalleryPhotoProps> = ({}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 24,
      }}>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <View
            key={`galery-${index}`}
            style={{
              width: 90,
              height: 90,
              borderRadius: 20,
              backgroundColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
        ))}
    </View>
  )
}

export default GalleryPhoto
