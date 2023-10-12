import {StyleSheet, View} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import store from '../../../store/RootStore'

type MiniMapProps = {}
const MiniMap: React.FC<MiniMapProps> = ({}) => {
  const {selectedPlace} = store.places

  return (
    <View style={styles.container}>
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        initialRegion={{...selectedPlace.location}}>
        <Marker
          coordinate={{
            longitude: selectedPlace.location.longitude,
            latitude: selectedPlace.location.latitude,
          }}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    height: 200,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
})

export default MiniMap
