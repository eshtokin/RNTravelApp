import React from 'react'
import {
  ImageSourcePropType,
  ImageBackground,
  View,
  Text,
  StyleSheet,
} from 'react-native'
import {LogoWhite} from '../../../../assets/icons/svg'
import {Colors, Typography, SCREEN_SIZE} from '@utils'

const {width, height} = SCREEN_SIZE

type PageComponentProps = {
  backgroundImage: ImageSourcePropType
  title: string
  text: string
}
const PageComponent: React.FC<PageComponentProps> = ({
  backgroundImage,
  title,
  text,
}) => {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="stretch"
      style={[
        {
          width,
          height,
        },
        styles.image,
      ]}>
      <View style={styles.content}>
        <LogoWhite />
        <Text style={{...Typography.headline[900], color: Colors.black[0]}}>
          {title}
        </Text>
        <Text style={{...Typography.bodyText[300], color: Colors.black[0]}}>
          {text}
        </Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  content: {
    gap: 30,
    marginBottom: 180,
  },
})
export default PageComponent
