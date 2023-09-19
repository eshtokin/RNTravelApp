import {ScrollView, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Colors from '../../utils/Colors'
import Places from './components/PlaceList'
import CategoryList from './components/CategoryList'
import PopularPackagesList from './components/PopularPackageList'
import Search from './components/Search'
import {Text} from '../../components'
import store from '../../store/RootStore'
import {observer} from 'mobx-react-lite'

type HomeProps = {}
const Home: React.FC<HomeProps> = observer(({}) => {
  const isEnabled = store.places.placesForSearch.length === 0
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollContainer} scrollEnabled={isEnabled}>
        <Text font="headline" fontWeight={700} style={styles.textAddStyle}>
          Where do you want to explore today?
        </Text>
        <Search />
        <CategoryList />
        <Places />
        <PopularPackagesList />
      </ScrollView>
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.black[0]},
  scrollContainer: {flex: 1, backgroundColor: Colors.black[0]},
  textAddStyle: {marginBottom: 18, marginTop: 30, paddingHorizontal: 30},
})
export default Home
