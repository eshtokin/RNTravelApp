import {RootStackProps} from '../navigation/types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackProps {}
  }
}
