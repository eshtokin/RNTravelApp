import {View} from 'react-native'
import {CalendarIcon} from '../../../../assets/icons/svg'
import TicketBorder from './TicketBorder'
import {Text} from '../../../components'
import Colors from '../../../utils/Colors'

type TicketProps = {
  item: {
    title: string
    price: string
    startDate: string
    endDate: string
  }
}
const Ticket: React.FC<TicketProps> = ({item}) => {
  const {title, price, startDate, endDate} = item
  return (
    <TicketBorder color={Colors.black[200]}>
      <Text font="headline" fontWeight={300}>
        {title}
      </Text>
      <Text font="headline" fontWeight={200} color="error" colorWeight={500}>
        ${price}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
        <CalendarIcon />
        <Text font="bodyText" fontWeight={100} colorWeight={400}>
          {startDate} - {endDate}
        </Text>
      </View>
    </TicketBorder>
  )
}

export default Ticket
