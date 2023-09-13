import {useState} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Colors from '../../utils/Colors'
import {Input, Text} from '../../components'
import Places from './components/PlaceList'
import CategoryList from './components/CategoryList'
import PopularPackagesList from './components/PopularPackageList'
import {LoupeIcon} from '../../../assets/icons/svg'

type HomeProps = {}
const Home: React.FC<HomeProps> = ({}) => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentPadding}>
          <Text font="headline" fontWeight={700} style={styles.textAddStyle}>
            Where do you want to explore today?
          </Text>
          <Input
            label={'Search destination'}
            value={searchValue}
            onChageText={setSearchValue}
            rightIcon={<LoupeIcon />}
          />
        </View>
        <CategoryList />
        <Places />
        <PopularPackagesList />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.black[0]},
  scrollContainer: {flex: 1, backgroundColor: Colors.black[0]},
  contentPadding: {paddingHorizontal: 30},
  textAddStyle: {marginBottom: 18, marginTop: 30},
})
export default Home
