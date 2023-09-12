import {ScrollView, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Colors from '../../utils/Colors'
import {Input, Text} from '../../components'
import Places from './components/PlaceList'
import CategoryList from './components/CategoryList'
import PopularPackagesList from './components/PopularPackageList'
import {LoupeIcon} from '../../../assets/icons/svg'

type HomeProps = {}
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Colors.black[0]}}
      edges={['top']}>
      <ScrollView style={{flex: 1, backgroundColor: Colors.black[0]}}>
        <View style={{paddingHorizontal: 30}}>
          <Text
            font="headline"
            fontWeight={700}
            style={{marginBottom: 18, marginTop: 30}}>
            Where do you want to explore today?
          </Text>
          <Input
            label={'Search destination'}
            value={''}
            onChageText={function (text: string): void {}}
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

export default Home
