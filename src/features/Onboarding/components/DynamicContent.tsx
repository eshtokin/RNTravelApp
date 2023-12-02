import React from 'react'
import {SectionList} from 'react-native'
import {PageComponent} from '../components'
import {ONBOARDING_DATA} from '../onboarding_info'
import SCREEN_SIZE from '../../../utils/ScreenSIze'

type DinamicContentProps = {
  listRef: React.Ref<SectionList>
}
const DinamicContent: React.FC<DinamicContentProps> = ({listRef}) => {
  return (
    <SectionList
      ref={listRef}
      scrollEnabled={false}
      horizontal
      getItemLayout={(_, index) => ({
        length: SCREEN_SIZE.width * 3, // Height of your item
        offset: SCREEN_SIZE.width * index,
        index,
      })}
      style={{
        width: SCREEN_SIZE.width,
        height: SCREEN_SIZE.height,
      }}
      sections={ONBOARDING_DATA}
      keyExtractor={item => item.title}
      renderItem={({item}) => {
        return (
          <PageComponent
            backgroundImage={item.backgraundImage}
            text={item.text}
            title={item.title}
          />
        )
      }}
    />
  )
}

export default DinamicContent
