import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from '@components'

const TitleForSection: React.FC<{title: string; label?: string}> = ({
  title,
  label,
}) => {
  return (
    <View style={titleStyles.container}>
      <Text font="headline" fontWeight={400}>
        {title}
      </Text>
      <Text colorWeight={300} font="headline" fontWeight={200}>
        {label || 'See All'}
      </Text>
    </View>
  )
}
const titleStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
})
export default TitleForSection
