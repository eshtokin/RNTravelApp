import decorateMapComponent from 'react-native-maps/lib/decorateMapComponent'
import Svg, {Path} from 'react-native-svg'

type ProfileIconProps = {}
const ProfileIcon: React.FC<ProfileIconProps> = ({}) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.0999 11.2752C10.0832 11.2752 10.0582 11.2752 10.0416 11.2752C10.0166 11.2752 9.98324 11.2752 9.95824 11.2752C8.06657 11.2169 6.6499 9.7419 6.6499 7.92523C6.6499 6.07523 8.15824 4.56689 10.0082 4.56689C11.8582 4.56689 13.3666 6.07523 13.3666 7.92523C13.3582 9.75023 11.9332 11.2169 10.1249 11.2752C10.1082 11.2752 10.1082 11.2752 10.0999 11.2752ZM9.9999 5.80856C8.83324 5.80856 7.89157 6.75856 7.89157 7.91689C7.89157 9.05856 8.78324 9.98356 9.91657 10.0252C9.94157 10.0169 10.0249 10.0169 10.1082 10.0252C11.2249 9.96689 12.0999 9.05023 12.1082 7.91689C12.1082 6.75856 11.1666 5.80856 9.9999 5.80856Z"
        fill="#0C0507"
      />
      <Path
        d="M10 18.9581C7.75836 18.9581 5.61669 18.1248 3.95836 16.6081C3.80836 16.4748 3.74169 16.2748 3.75836 16.0831C3.86669 15.0914 4.48336 14.1664 5.50836 13.4831C7.99169 11.8331 12.0167 11.8331 14.4917 13.4831C15.5167 14.1748 16.1334 15.0914 16.2417 16.0831C16.2667 16.2831 16.1917 16.4748 16.0417 16.6081C14.3834 18.1248 12.2417 18.9581 10 18.9581ZM5.06669 15.9164C6.45003 17.0748 8.19169 17.7081 10 17.7081C11.8084 17.7081 13.55 17.0748 14.9334 15.9164C14.7834 15.4081 14.3834 14.9164 13.7917 14.5164C11.7417 13.1498 8.26669 13.1498 6.20003 14.5164C5.60836 14.9164 5.21669 15.4081 5.06669 15.9164Z"
        fill="#0C0507"
      />
      <Path
        d="M10.0001 18.9582C5.05842 18.9582 1.04175 14.9415 1.04175 9.99984C1.04175 5.05817 5.05842 1.0415 10.0001 1.0415C14.9417 1.0415 18.9584 5.05817 18.9584 9.99984C18.9584 14.9415 14.9417 18.9582 10.0001 18.9582ZM10.0001 2.2915C5.75008 2.2915 2.29175 5.74984 2.29175 9.99984C2.29175 14.2498 5.75008 17.7082 10.0001 17.7082C14.2501 17.7082 17.7084 14.2498 17.7084 9.99984C17.7084 5.74984 14.2501 2.2915 10.0001 2.2915Z"
        fill="#0C0507"
      />
    </Svg>
  )
}

export default ProfileIcon
