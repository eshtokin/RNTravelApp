export enum Screens {
  Components = 'Components',
  Onboarding = 'Onboarding',
  Login = 'Login',
  ForgotPassword = 'ForgotPassword',
  CreateAccount = 'CreateAccount',
}

export type RootStackProps = {
  [Screens.Components]: undefined
  [Screens.Onboarding]: undefined
  [Screens.Login]: undefined
  [Screens.ForgotPassword]: undefined
  [Screens.CreateAccount]: undefined
}
