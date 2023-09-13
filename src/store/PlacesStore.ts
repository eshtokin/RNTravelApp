import {makeAutoObservable, reaction} from 'mobx'
import MOCK_PLACES, {GeneratedPlace, Categories, MOCK_CATEGORIES} from './mock'

export class Places {
  searchValue: string = ''
  places = MOCK_PLACES
  selectedPlace: GeneratedPlace = MOCK_PLACES[0]
  placesForSearch: GeneratedPlace[] = []
  categories = MOCK_CATEGORIES
  selectedCategory: Categories = Categories.all

  constructor() {
    makeAutoObservable(this)

    this.toggleFavouriteOnPlace = this.toggleFavouriteOnPlace.bind(this)
    this.selectPlace = this.selectPlace.bind(this)
    this.setCurrentCategory = this.setCurrentCategory.bind(this)
  }

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

const places = new Places()

reaction(
  () => places.searchValue,
  () => {
    if (places.searchValue.length === 0) {
      places.setPlacesForSearch([])
      return
    }

    const filteredPlaces = places.places.filter(
      p =>
        p.name.includes(places.searchValue) ||
        p.description.includes(places.searchValue) ||
        p.country.includes(places.searchValue),
    )

    places.setPlacesForSearch(filteredPlaces)
  },
  {delay: 500},
)

export default places
