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
