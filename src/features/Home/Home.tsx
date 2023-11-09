import {observer} from 'mobx-react-lite'
import {ScrollView, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import ScreenTitle from '../../components/ScreenTitle'
import store from '../../store/RootStore'
import Colors from '../../utils/Colors'
import CategoryList from './components/CategoryList'
import Places from './components/PlaceList'
import PopularPackagesList from './components/PopularPackageList'
import Search from './components/Search'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackProps, Screens} from '../../navigation/types'
import {useEffect} from 'react'

type HomeProps = NativeStackScreenProps<RootStackProps, Screens.Main>
const Home: React.FC<HomeProps> = observer(({navigation}) => {
  const isEnabled = store.places.placesForSearch.length === 0
  useEffect(() => {
    navigation.navigate(Screens.Modal)
  }, [])
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollContainer} scrollEnabled={isEnabled}>
        <ScreenTitle
          title="Where do you want to explore today?"
          style={styles.screenTitle}
        />
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
  screenTitle: {marginBottom: 18, marginTop: 30, paddingHorizontal: 30},
})
export default Home
