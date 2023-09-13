export enum Screens {
  Onboarding = 'Onboarding',
  Login = 'Login',
  ForgotPassword = 'ForgotPassword',
  CreateAccount = 'CreateAccount',
  ChooseFavouritePlace = 'ChooseFavouritePlase',
  Main = 'Main',
}

export type RootStackProps = {
  [Screens.Onboarding]: undefined
  [Screens.Login]: undefined
  [Screens.ForgotPassword]: undefined
  [Screens.CreateAccount]: undefined
  [Screens.ChooseFavouritePlace]: undefined
  [Screens.Main]: undefined
}

export enum HomeScreens {
  Home = 'Home',
  Wishlist = 'Wishlist',
  MyTrip = 'MyTrip',
  Profile = 'Profile',
  Components = 'Components',
}

export type HomeScreensPropsTypes = {
  [HomeScreens.Home]: undefined
  [HomeScreens.Wishlist]: undefined
  [HomeScreens.MyTrip]: undefined
  [HomeScreens.Profile]: undefined
  [HomeScreens.Components]: undefined
}
