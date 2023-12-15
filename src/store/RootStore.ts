import {makeAutoObservable} from 'mobx'
import places, {Places} from './PlacesStore'
import user, {User} from './UserStore'

export class Store {
  isOnboardingPassed = false
  user: User
  places: Places

  constructor() {
    this.user = user
    this.places = places

    makeAutoObservable(this)

    this.setIsOnboardingPassed = this.setIsOnboardingPassed.bind(this)
  }

  setIsOnboardingPassed(flag: boolean) {
    this.isOnboardingPassed = flag
  }

  isUserLogged(): boolean {
    const isUserHaveEmail = this.user.email.length > 3
    return isUserHaveEmail
  }
}

const store = new Store()

export default store
