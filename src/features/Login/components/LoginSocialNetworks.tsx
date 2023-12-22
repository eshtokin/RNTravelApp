import React, {FC, JSXElementConstructor, useState} from 'react'
import {Pressable, StyleSheet, View} from 'react-native'
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
} from '../../../../assets/icons/svg'
import Colors from '../../../utils/Colors'

type SocialNetworkLoginProps = {}
const SocialNetworkLogin: FC<SocialNetworkLoginProps> = () => {
  return (
    <View style={styles.socialWrapper}>
      <SocialIconWrapper
        Icon={InstagramIcon}
        onPress={() => console.log('insta')}
      />
      <SocialIconWrapper
        Icon={GoogleIcon}
        onPress={() => console.log('google')}
      />
      <SocialIconWrapper
        Icon={FacebookIcon}
        onPress={() => console.log('face')}
      />
    </View>
  )
}

type SocialIconWrapperProps = {
  Icon: JSXElementConstructor<{color?: string; foregroundColor?: string}>
  onPress: () => void
}
const SocialIconWrapper: React.FC<SocialIconWrapperProps> = ({
  Icon,
  onPress,
}) => {
  const foregroundActiveColor = Colors.brand[500]
  const foregroundInactiveColor = Colors.black[200]

  const [pressed, setPressed] = useState(false)

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      <Icon
        foregroundColor={
          pressed ? foregroundActiveColor : foregroundInactiveColor
        }
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.black[0],
    padding: 30,
  },
  buttonWrapper: {
    width: '100%',
    gap: 20,
  },
  socialWrapper: {flexDirection: 'row', gap: 50, marginTop: 50},
})

export default SocialNetworkLogin
