import {makeAutoObservable, reaction} from 'mobx'
import MOCK_PLACES, {Categories, GeneratedPlace, MOCK_CATEGORIES} from './mock'

class Store {
  isOnboardingPassed = false
  places = MOCK_PLACES
  selectedPlace: GeneratedPlace = MOCK_PLACES[0]
  selectedCategory: Categories = Categories.all
  searchValue: string = ''
  placesForSearch: GeneratedPlace[] = []
  categories = MOCK_CATEGORIES

  constructor() {
    makeAutoObservable(this)
    this.toggleFavouriteOnPlace = this.toggleFavouriteOnPlace.bind(this)
    this.selectPlace = this.selectPlace.bind(this)
    this.setCurrentCategory = this.setCurrentCategory.bind(this)
  }

  setIsOnboardingPassed(flag: boolean) {
    this.isOnboardingPassed = flag
  }
  // places

  setCurrentCategory(category: Categories) {
    this.selectedCategory = category
  }

  get placesForSelectedCategory() {
    if (this.selectedCategory === Categories.all) {
      return this.places
    }
    const filteredPlaces = this.places.filter(
      p => p.category === this.selectedCategory,
    )
    return filteredPlaces
  }

  get PopularPackagesList() {
    return [...this.places].sort((p1, p2) => p2.rate - p1.rate).slice(0, 5)
  }

  toggleFavouriteOnPlace(name: string) {
    const place = this.places.find(p => p.name === name)
    if (place) {
      place.inFavourites = !place.inFavourites
    }
  }

  selectPlace(selectedPlaceName: string) {
    const findSelectedPlace = this.places.find(
      p => p.name === selectedPlaceName,
    )
    if (findSelectedPlace) {
      this.selectedPlace = findSelectedPlace
    }
  }

  changeSearchValue(text: string) {
    this.searchValue = text
  }

  setPlacesForSearch(places: GeneratedPlace[]) {
    this.placesForSearch = places
  }
}

const store = new Store()

reaction(
  () => store.searchValue,
  () => {
    if (store.searchValue.length === 0) {
      store.setPlacesForSearch([])
      return
    }

    const filteredPlaces = store.places.filter(
      p =>
        p.name.includes(store.searchValue) ||
        p.description.includes(store.searchValue) ||
        p.country.includes(store.searchValue),
    )

    store.setPlacesForSearch(filteredPlaces)
  },
  {delay: 500},
)

export default store
