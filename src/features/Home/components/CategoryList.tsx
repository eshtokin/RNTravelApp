import {ScrollView, StyleSheet} from 'react-native'
import TitleForSection from './TitleForSection'
import {Category} from '../../../components'
import store from '../../../store/RootStore'
import {Categories} from '../../../store/mock'
import {observer} from 'mobx-react-lite'

type CategoryListProps = {}
const CategoryList: React.FC<CategoryListProps> = observer(({}) => {
  const {categories, selectedCategory, setCurrentCategory} = store.places
  const onCategoryPress = (name: Categories) => setCurrentCategory(name)
  return (
    <>
      <TitleForSection title="Choose Category" />
      <ScrollView
        horizontal
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}>
        {categories.map(({name, image}) => (
          <Category
            key={name}
            type="small"
            label={name}
            icon={image}
            onPress={() => onCategoryPress(name)}
            active={selectedCategory === name}
          />
        ))}
      </ScrollView>
    </>
  )
})

const styles = StyleSheet.create({
  scrollContainer: {flexGrow: 0},
  scrollContentContainer: {
    gap: 10,
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
})

export default CategoryList
