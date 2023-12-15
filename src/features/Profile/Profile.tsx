import {StyleSheet, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {ScreenTitle} from '@components'
import {Colors} from '@utils'
import {ProfileCard, ProfileElement} from './components'
import {GlobalIcon, MessageIcon, ProfileIcon} from '../../../assets/icons/svg'
import NotificationIcon from '../../../assets/icons/svg/NotificationIcon'
import store from '@store/RootStore'

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
  const {firstName, resetUser} = store.user

  const profileHandlers = (label: string) => {
    if (label === 'Logout') {
      return resetUser
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ScreenTitle title="Profile" />
        <ProfileCard firstName={firstName} />
        {ProfileElementsTitle.map(e => (
          <ProfileElement
            key={e.label}
            label={e.label}
            icon={e.icon}
            handler={profileHandlers(e.label)}
          />
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
  contentContainer: {
    gap: 30,
    paddingBottom: 30,
    marginHorizontal: 30,
  },
})

export default Profile
