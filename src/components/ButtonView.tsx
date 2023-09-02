import React from 'react'
import {View} from 'react-native'
import Button from './Button'

type ButtonViewProps = {}
const ButtonView: React.FC<ButtonViewProps> = ({}) => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <Button
          type="primary"
          icon="icon-left"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="large"
        />
        <Button
          type="primary"
          icon="label-only"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="medium"
        />
        <Button
          type="primary"
          icon="icon-right"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="small"
        />
        <Button
          type="primary"
          icon="icon-only"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="small"
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button
          type="secondary"
          icon="icon-left"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="small"
        />
        <Button
          type="secondary"
          icon="label-only"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="medium"
        />
        <Button
          type="secondary"
          icon="icon-right"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="medium"
        />
        <Button
          type="secondary"
          icon="icon-only"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="medium"
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button
          type="primary"
          icon="icon-left"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="large"
        />
        <Button
          type="secondary"
          icon="label-only"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="large"
        />
        <Button
          type="minimal"
          icon="icon-right"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="large"
        />
        <Button
          type="minimal"
          icon="icon-only"
          label={'Label'}
          onPress={() => {}}
          disabled={false}
          size="large"
        />
      </View>
    </>
  )
}
export default ButtonView
