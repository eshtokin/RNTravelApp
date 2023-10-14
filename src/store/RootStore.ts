import {makeAutoObservable} from 'mobx'
import places, {Places} from './PlacesStore'

export type UserType = {
  email: string
  password: string
}

export class Store {
  isOnboardingPassed = false
  user: UserType = {email: '', password: ''}
  places: Places

  constructor() {
    this.places = places

    makeAutoObservable(this)

    this.setIsOnboardingPassed = this.setIsOnboardingPassed.bind(this)
    this.setUserInfo = this.setUserInfo.bind(this)
  }

  setIsOnboardingPassed(flag: boolean): void {
    this.isOnboardingPassed = flag
  }

  setUserInfo(user: UserType): void {
    this.user = user
  }

  isUserLogged(): boolean {
    const isUserHaveEmail = this.user.email.length > 3
    const isUserHavePassword = this.user.password.length > 3
    return isUserHaveEmail && isUserHavePassword
  }
}

const store = new Store()

export default store
