import {ScrollView} from 'react-native'
import TitleForSection from './TitleForSection'
import {Category} from '../../../components'
import store from '../../../store/RootStore'

type CategoryListProps = {}
const CategoryList: React.FC<CategoryListProps> = ({}) => {
  return (
    <>
      <TitleForSection title="Choose Category" />
      <ScrollView
        horizontal
        style={{flexGrow: 0}}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 30,
          paddingVertical: 25,
        }}>
        {store.categories.map(({name, image}) => (
          <Category
            key={name}
            type="small"
            label={name}
            icon={image}
            onPress={() => {}}
          />
        ))}
      </ScrollView>
    </>
  )
}

export default CategoryList
