export enum Screens {
  Onboarding = 'Onboarding',
  Login = 'Login',
  ForgotPassword = 'ForgotPassword',
  CreateAccount = 'CreateAccount',
  ChooseFavouritePlace = 'ChooseFavouritePlase',
  Main = 'Main',
  Product = 'Product',
}

export type RootStackProps = {
  [Screens.Onboarding]: undefined
  [Screens.Login]: undefined
  [Screens.ForgotPassword]: undefined
  [Screens.CreateAccount]: undefined
  [Screens.ChooseFavouritePlace]: undefined
  [Screens.Main]: {
    screen: HomeScreens
  }
  [Screens.Product]: undefined
}

export enum HomeScreens {
  Home = 'Home',
  Wishlist = 'Wishlist',
  MyTrip = 'MyTrip',
  Profile = 'Profile',
}

export type HomeScreensPropsTypes = {
  [HomeScreens.Home]: undefined
  [HomeScreens.Wishlist]: undefined
  [HomeScreens.MyTrip]: undefined
  [HomeScreens.Profile]: undefined
}
