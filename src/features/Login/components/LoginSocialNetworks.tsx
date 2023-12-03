import React, {FC} from 'react'
import {StyleSheet, View} from 'react-native'
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
      <InstagramIcon />
      <GoogleIcon />
      <FacebookIcon />
    </View>
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
