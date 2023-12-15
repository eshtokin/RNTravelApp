import {makeAutoObservable, reaction} from 'mobx'
import MOCK_PLACES, {
  GeneratedPlace,
  Categories,
  MOCK_CATEGORIES,
} from './mockData/places'

export class Places {
  searchValue: string = ''
  searchValueForWishlist: string = ''
  places = MOCK_PLACES
  selectedPlace: GeneratedPlace = MOCK_PLACES[0]
  placesForSearch: GeneratedPlace[] = []
  placesForFavouriteSearch: GeneratedPlace[] = []
  categories = MOCK_CATEGORIES
  selectedCategory: Categories = Categories.all

  constructor() {
    makeAutoObservable(this)

    this.toggleFavouriteOnPlace = this.toggleFavouriteOnPlace.bind(this)
    this.selectPlace = this.selectPlace.bind(this)
    this.setCurrentCategory = this.setCurrentCategory.bind(this)
    this.changeSearchValue = this.changeSearchValue.bind(this)
  }

  setCurrentCategory(category: Categories) {
    this.selectedCategory = category
  }

  get favouritePlaces() {
    return this.places.filter(p => p.inFavourites)
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

  changeSearchValue(text: string, inWishlist: boolean = false) {
    if (inWishlist) {
      this.searchValueForWishlist = text
      return
    }
    this.searchValue = text
  }

  setPlacesForSearch(places: GeneratedPlace[], inFavourites: boolean = false) {
    if (inFavourites) {
      this.placesForFavouriteSearch = places
      return
    }
    this.placesForSearch = places
  }
}

const places = new Places()

reaction(
  () => places.searchValue,
  value => {
    if (value.length === 0) {
      places.setPlacesForSearch([])
      return
    }

    const filteredPlaces = places.places.filter(
      p =>
        p.name.toLocaleLowerCase().includes(value) ||
        p.description.toLocaleLowerCase().includes(value) ||
        p.country.toLocaleLowerCase().includes(value),
    )

    places.setPlacesForSearch(filteredPlaces)
  },
  {delay: 500},
)

reaction(
  () => places.searchValueForWishlist,
  value => {
    const lowerCaseValue = value.toLocaleLowerCase()
    if (lowerCaseValue.length === 0) {
      places.setPlacesForSearch([], true)
      return
    }

    const filteredPlaces = places.places
      .filter(p => p.inFavourites)
      .filter(
        p =>
          p.name.toLocaleLowerCase().includes(lowerCaseValue) ||
          p.description.toLocaleLowerCase().includes(lowerCaseValue) ||
          p.country.toLocaleLowerCase().includes(lowerCaseValue),
      )

    places.setPlacesForSearch(filteredPlaces, true)
  },
  {delay: 500},
)

export default places
