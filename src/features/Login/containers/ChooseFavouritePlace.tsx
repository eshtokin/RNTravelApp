import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Colors, Typography} from '@utils'
import {Button, Category} from '@components'
import {useState} from 'react'
import {MOCK_CATEGORIES} from '@store/mockData/places'
import store from '@store/RootStore'

type ChooseFavouritePlaceProps = {}
const ChooseFavouritePlace: React.FC<ChooseFavouritePlaceProps> = ({}) => {
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

  const onSubmitHandler = () => {}

  const canPressSubmit = selectedCategory.length > 0
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>
          Where is your favorite place to explore?
        </Text>
        <View style={styles.categoriesContainer}>
          {MOCK_CATEGORIES.map(({name, image}) => (
            <Category
              key={name}
              icon={image}
              label={name}
              onPress={() => onCategoryPressHandler(name)}
              active={selectedCategory.includes(name)}
              type="large"
            />
          ))}
        </View>
      </ScrollView>
      <Button
        type={'primary'}
        icon={'label-only'}
        size={'large'}
        label={'Next'}
        onPress={onSubmitHandler}
        addStyles={styles.addBtnStyle}
        disabled={!canPressSubmit}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.black[0],
    paddingBottom: 30,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },

  title: {
    ...Typography.headline[700],
    color: Colors.black[900],
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    alignItems: 'center',
    gap: 30,
    justifyContent: 'space-evenly',
  },
  addBtnStyle: {
    marginTop: 30,
    marginHorizontal: 30,
  },
})

export default ChooseFavouritePlace
