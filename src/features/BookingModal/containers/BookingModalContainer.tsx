import {useState} from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackProps, Screens} from '../../../navigation/types'
import BookingModal from './BookingModal'

type BookingModalContainerProps = NativeStackScreenProps<
  RootStackProps,
  Screens.Modal
>
const BookingModalContainer: React.FC<BookingModalContainerProps> = ({
  navigation,
  route,
}) => {
  // const [bookingDate, setBookingDate] = useState({
  //   startDate: '19-01-2023',
  //   endDate: '23-01-2023',
  // })
  // const [personResponsible, setPersonResponsible] = useState('Prista')
  // const [contactInfo, setContactInfo] = useState('+6203912012313')
  // const [member, setMember] = useState(2)
  // const [typeId, setTypeId] = useState('ID Card')
  // const [numberId, setNumberId] = useState('17230749841039847102938')

  // const [paymentMethods, setPaymentMethods] = useState('PayPall')

  // const [cardNumber, setCardNumber] = useState('2138 2999 0928 1923')
  // const [sum, setSum] = useState(2133)

  return <BookingModal navigation={navigation} route={route} />
}

export default BookingModalContainer
