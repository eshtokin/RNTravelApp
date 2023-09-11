import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Colors from '../utils/Colors'
import Typography from '../utils/Typography'
import {CircleChecked} from '../../assets/icons/svg'

const beach = require('./../../assets/icons/category-beach.png')
type CategoryProps = {
  label: string
  icon: ImageSourcePropType
  onPress: () => void
  active?: boolean
}
const Category: React.FC<CategoryProps> = ({
  label,
  icon,
  onPress,
  active = false,
}) => {
  return (
    <Pressable
      style={[styles.container, active && styles.containerActive]}
      onPress={onPress}>
      <View style={styles.activeIconPosition}>
        {active && <CircleChecked />}
      </View>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderWidth: 2,
    borderColor: Colors.black[100],
  },
  containerActive: {
    borderWidth: 2,
    borderColor: Colors.success[600],
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor: Colors.black[10],
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 40,
    height: 40,
  },
  label: {
    ...Typography.headline[300],
    color: Colors.black[900],
  },
  activeIconPosition: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
})

export default Category
