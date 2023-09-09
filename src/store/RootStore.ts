import {makeAutoObservable} from 'mobx'

class Store {
  isOnboardingPassed = false
  constructor() {
    makeAutoObservable(this)
  }

  setIsOnboardingPassed(flag: boolean) {
    this.isOnboardingPassed = flag
  }
}

const store = new Store()

export default store
