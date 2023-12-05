import {makeAutoObservable} from 'mobx'
import places, {Places} from './PlacesStore'
import User from './UserStore'

export class Store {
  isOnboardingPassed = false
  user: User
  places: Places

  constructor() {
    this.user = new User()
    this.places = places

    makeAutoObservable(this)

    this.setIsOnboardingPassed = this.setIsOnboardingPassed.bind(this)
    this.setUserInfo = this.setUserInfo.bind(this)
  }

  setIsOnboardingPassed(flag: boolean) {
    this.isOnboardingPassed = flag
  }

  setUserInfo(user: User) {
    this.user = user
  }

  isUserLogged(): boolean {
    const isUserHaveEmail = this.user.email.length > 3
    const isUserHavePassword = this.user.password.length > 3
    return isUserHaveEmail && isUserHavePassword
  }
}
