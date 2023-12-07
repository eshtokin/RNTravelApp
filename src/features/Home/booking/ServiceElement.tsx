import {ReactElement} from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from '@components'
import {Colors} from '@utils'

type ServiceElementProps = {serviceInfo: {label: string; icon: ReactElement}}
const ServiceElement: React.FC<ServiceElementProps> = ({serviceInfo}) => {
  return (
    <View style={serviceStyles.container}>
      <View style={serviceStyles.icon}>{serviceInfo.icon}</View>
      <Text font="headline" fontWeight={300}>
        {serviceInfo.label}
      </Text>
    </View>
  )
}

const serviceStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.black[200],
    paddingLeft: 5,
    paddingVertical: 5,
    paddingRight: 15,
  },
  icon: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: Colors.black[10],
  },
})

export default ServiceElement
