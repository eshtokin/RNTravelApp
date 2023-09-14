import {ScrollView, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Typography from '../../../utils/Typography'
import Colors from '../../../utils/Colors'
import {Button, Category} from '../../../components'
import {kutaBeachDestinationSmall} from '../../../../assets/images'
import {useState} from 'react'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {Screens} from '../../../navigation/types'
import store from '../../../store/RootStore'

type ChooseFavouritePlaceProps = {}
const ChooseFavouritePlace: React.FC<ChooseFavouritePlaceProps> = ({}) => {
  const navigation = useNavigation()
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])

  const onCategoryPressHandler = (categoryName: string) => {
    if (selectedCategory.includes(categoryName)) {
      setSelectedCategory(
        selectedCategory.filter(
          storedCategory => storedCategory !== categoryName,
        ),
      )
    } else {
      setSelectedCategory([...selectedCategory, categoryName])
    }
  }

  const onSubmitHandler = () =>
    store.setUserInfo({email: 'test', password: 'test'})

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.black[0],
        paddingBottom: 30,
      }}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          paddingHorizontal: 30,
          paddingTop: 30,
        }}>
        <Text style={{...Typography.headline[700], color: Colors.black[900]}}>
          Where is your favorite place to explore?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 30,
            alignItems: 'center',
            gap: 30,
            justifyContent: 'space-evenly',
          }}>
          {['Beach', 'Mountaing', 'Forest', 'Ocean', 'Camping', 'Fishing'].map(
            categoryName => (
              <Category
                key={categoryName}
                icon={kutaBeachDestinationSmall}
                label={categoryName}
                onPress={() => onCategoryPressHandler(categoryName)}
                active={selectedCategory.includes(categoryName)}
              />
            ),
          )}
        </View>
      </ScrollView>
      <Button
        type={'primary'}
        icon={'label-only'}
        size={'large'}
        label={'Next'}
        onPress={onSubmitHandler}
        addStyles={{
          marginTop: 30,
          marginHorizontal: 30,
        }}
      />
    </SafeAreaView>
  )
}

export default ChooseFavouritePlace
