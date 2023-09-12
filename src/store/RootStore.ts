import {makeAutoObservable} from 'mobx'
import {
  category_beach,
  category_camping,
  category_fishing,
  category_forest,
  category_mountins,
  category_wave,
} from '../../assets/images'

class Store {
  isOnboardingPassed = false

  categories = [
    {name: 'Forest', image: category_forest},
    {name: 'Beach', image: category_beach},
    {name: 'Mountain', image: category_mountins},
    {name: 'Ocean', image: category_wave},
    {name: 'Camping', image: category_camping},
    {name: 'Fishing', image: category_fishing},
  ]
  constructor() {
    makeAutoObservable(this)
  }

  setIsOnboardingPassed(flag: boolean) {
    this.isOnboardingPassed = flag
  }
}

const store = new Store()

export default store
