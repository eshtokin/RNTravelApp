import React from 'react'
import {FlatList} from 'react-native'
import {PageComponent} from '../components'
import {ONBOARDING_DATA} from '../onboarding_info'
import SCREEN_SIZE from '../../../utils/ScreenSIze'

type DinamicContentProps = {
  listRef: React.Ref<FlatList>
}
const DinamicContent: React.FC<DinamicContentProps> = ({listRef}) => {
  return (
    <FlatList
      horizontal
      scrollEnabled={false}
      ref={listRef}
      data={ONBOARDING_DATA}
      style={{width: SCREEN_SIZE.width, height: SCREEN_SIZE.height}}
      keyExtractor={item => item.title}
      renderItem={({item: {backgraundImage, title, text}}) => (
        <PageComponent
          backgroundImage={backgraundImage}
          title={title}
          text={text}
        />
      )}
    />
  )
}

export default DinamicContent
