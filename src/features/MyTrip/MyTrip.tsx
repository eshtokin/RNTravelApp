import {observer} from 'mobx-react-lite'
import {useMemo} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {LoupeIcon} from '../../../assets/icons/svg'
import {Input} from '../../components'
import ScreenTitle from '../../components/ScreenTitle'
import store from '../../store/RootStore'
import Colors from '../../utils/Colors'
import {Ticket} from './components'

type MyTripProps = {}
const MyTrip: React.FC<MyTripProps> = observer(({}) => {
  const {places} = store.places

  const trips = useMemo(() => {
    return places.slice(0, 5).map(p => ({
      ...p,
      startDate: '13 Jun 2021',
      endDate: '15 Jun 2021',
    }))
  }, [places])

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.topContentWrapper}>
        <ScreenTitle title="List Your Trip" />
        <Input
          label="Search destination"
          onChageText={() => {}}
          value=""
          rightIcon={<LoupeIcon />}
        />
      </View>
      <FlatList
        data={trips}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) => (
          <Ticket
            item={{
              title: item.name,
              price: item.price.toString(),
              startDate: item.startDate,
              endDate: item.endDate,
            }}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black[0],
    paddingTop: 30,
    gap: 30,
  },
  topContentWrapper: {gap: 30, marginHorizontal: 30},
  listContent: {
    gap: 20,
    marginHorizontal: 30,
    paddingBottom: 30,
  },
})

export default MyTrip
