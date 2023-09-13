import {makeAutoObservable} from 'mobx'
import places, {Places} from './PlacesStore'

export class Store {
  isOnboardingPassed = false
  places: Places

  constructor() {
    this.places = places

    makeAutoObservable(this)

    this.setIsOnboardingPassed = this.setIsOnboardingPassed.bind(this)
  }

  setIsOnboardingPassed(flag: boolean) {
    this.isOnboardingPassed = flag
  }
}

const store = new Store()

export default store
