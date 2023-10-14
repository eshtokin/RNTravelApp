import {PropsWithChildren} from 'react'
import {StyleSheet, View} from 'react-native'
import Svg, {Path} from 'react-native-svg'
import {Colors} from 'react-native/Libraries/NewAppScreen'

type TicketBorderProps = {
  color?: string
  width?: number
  height?: number
} & PropsWithChildren

const TicketBorder: React.FC<TicketBorderProps> = ({
  children,
  color = Colors.black[200],
  width = 20,
  height = 130,
}) => {
  return (
    <View style={[styles.container, {borderColor: color}]}>
      <View
        style={[
          styles.topCircle,
          {
            transform: [{rotate: '90deg'}],
            borderColor: color,
          },
        ]}
      />
      <View
        style={[
          styles.bottomCircle,
          {
            transform: [{rotate: '-90deg'}],
            borderColor: color,
          },
        ]}
      />
      <View style={styles.positionForDashedLine}>
        <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <Path d={`M2 0 V130`} stroke={color} strokeDasharray="5 5" />
        </Svg>
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    height: 130,
    justifyContent: 'space-between',
    padding: 25,
  },
  topCircle: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRadius: 20,
    position: 'absolute',
    top: -9,
    right: 50,
    backgroundColor: 'white',
    zIndex: 1,
  },
  bottomCircle: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRadius: 20,
    position: 'absolute',
    bottom: -9,
    right: 50,
    backgroundColor: 'white',
    zIndex: 1,
  },
  positionForDashedLine: {position: 'absolute', right: 45},
})
export default TicketBorder
