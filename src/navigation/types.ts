export enum Screens {
  Components = 'Components',
  Onboarding = 'Onboarding',
  Login = 'Login',
  ForgotPassword = 'ForgotPassword',
}

export type RootStackProps = {
  [Screens.Components]: undefined
  [Screens.Onboarding]: undefined
  [Screens.Login]: undefined
  [Screens.ForgotPassword]: undefined
}
