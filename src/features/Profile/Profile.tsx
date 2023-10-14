import {ScrollView, StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {GlobalIcon, MessageIcon, ProfileIcon} from '../../../assets/icons/svg'
import NotificationIcon from '../../../assets/icons/svg/NotificationIcon'
import ScreenTitle from '../../components/ScreenTitle'
import Colors from '../../utils/Colors'
import {ProfileCard, ProfileElement} from './components'

const ProfileElementsTitle = [
  {label: 'Personal Information', icon: <ProfileIcon />},
  {label: 'Notification', icon: <NotificationIcon />},
  {label: 'FAQ', icon: <MessageIcon />},
  {label: 'Dark Mode'},
  {label: 'Language', icon: <GlobalIcon />},
  {label: 'Logout'},
]

type ProfileProps = {}
const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.contentPadding}>
        <ScreenTitle title="Profile" />
        <ProfileCard />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {ProfileElementsTitle.map(e => (
          <ProfileElement key={e.label} label={e.label} icon={e.icon} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    paddingTop: 30,
    backgroundColor: Colors.black[0],
  },
  contentPadding: {paddingHorizontal: 30, gap: 30},
  contentContainer: {
    gap: 30,
    paddingBottom: 30,
    marginHorizontal: 30,
  },
})

export default Profile
