import {
  Dimensions,
  LayoutChangeEvent,
  LayoutRectangle,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import {Input, Package} from '../../../components'
import store from '../../../store/RootStore'
import {CrossIcon, LoupeIcon} from '../../../../assets/icons/svg'
import {observer} from 'mobx-react-lite'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {useState} from 'react'
import Colors from '../../../utils/Colors'

type SearchProps = {}
const Search: React.FC<SearchProps> = observer(({}) => {
  const {searchValue, changeSearchValue, placesForSearch} = store.places
  const insetes = useSafeAreaInsets()
  const [searchResultLayout, setSearchResultLayout] = useState<LayoutRectangle>(
    {
      x: 0,
      y: 0,
      height: 0,
      width: 0,
    },
  )
  const onChangeSearchValue = (value: string) => changeSearchValue(value)
  const onLayout = (event: LayoutChangeEvent) => {
    setSearchResultLayout(event.nativeEvent.layout)
  }
  const clearInput = () => changeSearchValue('')

  const isEnabled = store.places.placesForSearch.length > 0

  return (
    <View
      style={[
        isEnabled && styles.activeContainer,

        styles.searchContainerWithActivePosition,
      ]}>
      <Input
        onLayout={onLayout}
        label={'Search destination'}
        value={searchValue}
        onChageText={onChangeSearchValue}
        onRightIconPress={clearInput}
        rightIcon={<CrossIcon />}
        clearTextOnFocus={true}
        autoCorrect={false}
        returnKeyType="done"
      />
      {isEnabled && (
        <ScrollView
          style={[
            styles.resultContainer,
            {
              height: Dimensions.get('screen').height - searchResultLayout.y,
              top: searchResultLayout.y + searchResultLayout.height,
            },
          ]}
          contentContainerStyle={[
            styles.scrollContainerStyle,
            {
              paddingBottom:
                searchResultLayout.height +
                searchResultLayout.y +
                insetes.top +
                insetes.bottom +
                100,
            },
          ]}>
          {placesForSearch.map(item => (
            <Package
              key={item.name}
              item={item}
              onHeartIconPress={function (): void {
                throw new Error('Function not implemented.')
              }}
            />
          ))}
        </ScrollView>
      )}
    </View>
  )
})

const styles = StyleSheet.create({
  contentPadding: {paddingHorizontal: 30},
  activeContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.black[0],
  },
  inputContainer: {
    height: 48,
    marginHorizontal: 16,
    marginVertical: 30,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
  },
  scrollContainerStyle: {
    gap: 20,
  },
  searchContainerWithActivePosition: {
    zIndex: 9999,
    paddingHorizontal: 30,
  },
  resultContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    zIndex: 100,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
})

export default Search
