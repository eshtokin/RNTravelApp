import {StyleSheet, View} from 'react-native'

type MiniMapProps = {}
const MiniMap: React.FC<MiniMapProps> = ({}) => {
  return <View style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    backgroundColor: 'grey',
    height: 200,
    width: '100%',
    borderRadius: 20,
  },
})

export default MiniMap
