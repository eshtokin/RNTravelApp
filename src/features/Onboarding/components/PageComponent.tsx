import React from 'react'
import {
  ImageSourcePropType,
  ImageBackground,
  View,
  Text,
  Dimensions,
} from 'react-native'
import {LogoWhite} from '../../../../assets/icons/svg'
import Typography from '../../../utils/Typography'
import Colors from '../../../utils/Colors'

const {width, height} = Dimensions.get('screen')

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
      style={{
        width,
        height,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingBottom: 30,
      }}>
      <View style={{gap: 30, marginBottom: 180}}>
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

export default PageComponent
