import {View} from 'react-native'
import {Header} from '../../components'
import Colors from '../../utils/Colors'

type HomeProps = {}
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.black[0]}}>
      <Header />
    </View>
  )
}

export default Home
