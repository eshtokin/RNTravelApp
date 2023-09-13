import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from '../../../components'

const TitleForSection: React.FC<{title: string; label?: string}> = ({
  title,
  label,
}) => {
  return (
    <View style={{paddingHorizontal: 30}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <Text font="headline" fontWeight={400}>
          {title}
        </Text>
        <Text colorWeight={300} font="headline" fontWeight={200}>
          {label || 'See All'}
        </Text>
      </View>
    </View>
  )
}
const titleStyles = StyleSheet.create({})
export default TitleForSection
