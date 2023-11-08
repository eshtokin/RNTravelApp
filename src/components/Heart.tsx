import {HeartIcon} from '../../assets/icons/svg'
import Colors from '../utils/Colors'

type HeartProps = {
  active: boolean
  activeFillColor?: string
  inactiveFillColor?: string
  activeStrokeColor?: string
  inactiveStokeColor?: string
  size?: number
}
const Heart: React.FC<HeartProps> = ({
  active,
  activeFillColor = Colors.error[500],
  inactiveFillColor = Colors.black.transparent,
  activeStrokeColor = Colors.error[500],
  inactiveStokeColor = Colors.black[0],
  size = 24,
}) => {
  const colors = active
    ? {
        fillColor: activeFillColor,
        strokeColor: activeStrokeColor,
      }
    : {
        fillColor: inactiveFillColor,
        activeStrokeColor: inactiveStokeColor,
      }

  return (
    <HeartIcon
      size={size}
      fillColor={colors.fillColor}
      strokeColor={colors.strokeColor}
    />
  )
}

export default Heart
