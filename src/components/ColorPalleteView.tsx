import React from 'react'
import {View, Text} from 'react-native'
import Colors from '../utils/Colors'

const ColorPalleteView = () => {
  const colorEntries = React.useMemo(
    () =>
      Object.entries(Colors).map(item => {
        return [item[0], Object.entries(item[1])]
      }),
    [Colors],
  )
  return (
    <View>
      {colorEntries.map(item => {
        return (
          <View
            key={item[0].toString()}
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white'}}>{item[0]}</Text>
            <View style={{flexDirection: 'row'}}>
              {typeof item[1] === 'object' &&
                item[1].map(color => {
                  return (
                    <View
                      key={color[1].toString()}
                      style={{
                        backgroundColor: color[1],
                        height: 20,
                        width: 20,
                      }}
                    />
                  )
                })}
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default ColorPalleteView
