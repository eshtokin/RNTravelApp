import Svg, {Circle, G, Mask, Rect} from 'react-native-svg'

type CreditCardIconProps = {}
const CreditCardIcon: React.FC<CreditCardIconProps> = () => {
  return (
    <Svg width="45" height="40" viewBox="0 0 45 40" fill="none">
      <Rect width="45" height="40" rx="8" fill="white" />
      <Circle cx="17" cy="20" r="10" fill="#EA001B" />
      <Circle cx="27.4761" cy="20" r="10" fill="#F79E1C" />
      <Mask
        id="mask0_704_5968"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="17"
        y="10"
        width="21"
        height="20">
        <Circle cx="27.4761" cy="20" r="10" fill="#F79E1C" />
      </Mask>
      <G mask="url(#mask0_704_5968)">
        <Circle cx="17" cy="20" r="10" fill="#FF5F01" />
      </G>
    </Svg>
  )
}

export default CreditCardIcon
