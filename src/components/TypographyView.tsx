import React from 'react'
import {View, Text} from 'react-native'
import Typography from '../utils/Typography'

const TypographyView = () => {
  const typoEntries = React.useMemo(
    () =>
      Object.entries(Typography).map(item => [
        item[0],
        Object.entries(item[1]),
      ]),
    [Typography],
  )

  return (
    <View>
      {typoEntries.map(typo => {
        return (
          <View key={typo[0].toString()}>
            {typeof typo[1] === 'object' &&
              typo[1].map(second => {
                return (
                  <Text
                    key={typo[0].toString() + second[0].toString()}
                    style={second[1]}>
                    {second[0]} - Lorem ipsum
                  </Text>
                )
              })}
          </View>
        )
      })}
    </View>
  )
}

export default TypographyView
