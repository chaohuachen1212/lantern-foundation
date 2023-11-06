import { getScrollTop, getUrlParameter } from '../helpers/dom'
import { debounce } from 'throttle-debounce'
import jump from 'jump.js'

class CoreFacilities {
  constructor() {
    this.elem = document.querySelector('[core-facilities]')

    if (this.elem) {
      this.hero = document.querySelector('.core-facilities-hero')
      this.mapElem = this.elem.querySelector('.core-facilities__map-embed')
      this.facilitiesList = this.elem.querySelector('.core-facilities__list')
      this.facilities = [...this.facilitiesList.querySelectorAll('.core-facility')]
      this.filtersMain = this.elem.querySelector('.list-filters')
      this.filters = this.filtersMain.querySelectorAll('.list-filter')
      this.search = this.elem.querySelector('.core-facilities__search')
      this.searchCancel = this.elem.querySelector('.search-cancel')
      this.resultsCount = this.elem.querySelector('.core-facilities__count')
      this.facilityParam = getUrlParameter().facility
      this.activeFilters = {}
      this.scrolling = false

      // make our map callback globally accessible
      window.initMap = this.initMap.bind(this)

      this.buildFiltersObj()
      this.events()
    }
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElem, {
      zoom: 12,
      maxZoom: 16,
      disableDefaultUI: true,
      zoomControl: true,
      styles: [{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","stylers":[{"color":"#f7f7f7"},{"saturation":10},{"visibility":"on"}]},{"featureType":"poi.park","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ebebeb"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#cccccc"},{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#ded7f3"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]
    })

    this.startingBounds = new google.maps.LatLngBounds()

    this.icon = {
      url: '/wp-content/themes/bina/img/pin-outline.png',
      scaledSize: new google.maps.Size(24.3, 35.55)
    }

    this.iconActive = {
      url: '/wp-content/themes/bina/img/pin-active-outline.png',
      scaledSize: new google.maps.Size(24.3, 35.55)
    }

    this.textContents = []
    this.markers = []
    this.activeMarker = null

    this.facilities.forEach((elem, index) => {
      var lat = elem.dataset.lat
      var lng = elem.dataset.lng

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        icon: this.icon,
        map: this.map,
        index: index,
        zIndex: 1
      })

      // pull out the searchable text we'll use for quicksearching
      var searchItems = [...elem.querySelectorAll('.search-item')].map((elem) => {
        return elem.textContent.toLowerCase().trim()
      }).join(' ')

      this.markers.push(marker)
      this.textContents.push(searchItems)
      this.startingBounds.extend(marker.position)

      // on marker click activate the icon and jump to the card
      google.maps.event.addListener(marker, 'click', () => {
        var cardElem = this.facilities[marker.index]

        this.toggleCardState(cardElem.children[0])

        setTimeout(() => {
          jump(cardElem, {
            duration: 750,
            offset: -(this.filtersMain.offsetHeight + 15)
          })
        }, 200)
      })
    })

    // position the map bounds
    this.map.fitBounds(this.startingBounds)

    // if linking to facility directly
    if (this.facilityParam) {
      this.handleParam()
    }
  }

  events = () => {
    this.facilities.forEach((elem) => {
      elem.children[0].addEventListener('click', (e) => {
        this.toggleCardState(e.currentTarget, true)
      })

      elem.addEventListener('mouseenter', this.handleCardHover)
      elem.addEventListener('mouseleave', this.handleCardHoverExit)
    })

    this.search.addEventListener('keyup', debounce(375, (e) => {
      this.handleSearch(e.target.value.toLowerCase().trim())
    }))

    this.searchCancel.addEventListener('click', this.handleSearchCancel)

    this.filtersMain.addEventListener('click', this.handleClick)
    this.filtersMain.addEventListener('keypress', this.handleKeyPress)
    document.addEventListener('click', this.handleFilterOffClick)

    try {
      if (window.location.href.includes(`/core-facilities`)) {
        const searchInput = document.querySelector('.core-facilities__search');

        if (searchInput) {
          let timer = null;
          const delay = 1000;

          searchInput.addEventListener(`input`, (event) => {
            clearTimeout(timer);

            timer = setTimeout(() => {
              window.dataLayer.push({
                event: 'core_facilities_search_input',
                value: event.target.value,
              });
            }, delay);
          });
        }
      }

      if (window.location.href.includes(`/core-facilities`)) {
        const facilitiesOpenToCheckboxes = Array.from(document.querySelectorAll(`.list-filter.open-to-filter input[type='checkbox']`));
        const technologiesCheckboxes = Array.from(document.querySelectorAll(`.list-filter.technologies-filter input[type='checkbox']`));
      
        if (facilitiesOpenToCheckboxes.length) {
          facilitiesOpenToCheckboxes.map((checkbox) => {
            checkbox.addEventListener(`change`, (event) => {
              window.dataLayer.push({
                event: 'core_facilities_open_to_checkbox',
                value: event.target.value,
              });
            });
          });
        }
      
        if (technologiesCheckboxes.length) {
          technologiesCheckboxes.map((checkbox) => {
            checkbox.addEventListener(`change`, (event) => {
              window.dataLayer.push({
                event: 'core_facilities_technologies_checkbox',
                value: event.target.value,
              });
            });
          });
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  buildFiltersObj = () => {
    this.filters.forEach((filter) => {
      const filterSlug = filter.getAttribute('data-filter')
      this.activeFilters[filterSlug] = []
    })
  }

  handleClick = (e) => {
    if (e.target.matches('input') && e.target.type === 'checkbox') {
      const parent = e.target.parentNode
      this.updateFilter(parent)
    } else if (e.target.classList.contains('list-filter__toggle')) {
      this.handleFilterToggle(e.target)
    }
  }

  handleKeyPress = (e) => {
    if (13 === e.keyCode) {
      const focusEl = document.activeElement

      if (focusEl.classList.contains('list-filter-item')) {
        // manually trigger input checkbox
        const input = focusEl.querySelector('input')
        if (input) {
          if (false === input.checked) {
            input.setAttribute('aria-checked', true)
            input.checked = true
          } else {
            input.setAttribute('aria-checked', false)
            input.checked = false
          }
        }

        this.updateFilter(focusEl)
      }
    }
  }

  handleFilterToggle = (toggle) => {
    var labels = toggle.parentElement.querySelectorAll('.list-filter__item')

    if (toggle.parentElement.classList.contains('is-expanded')) {
      toggle.parentElement.classList.remove('is-expanded')
    } else {
      this.filters.forEach((filter) => {
        filter.classList.remove('is-expanded')
      })
      toggle.parentElement.classList.add('is-expanded')
    }

    labels.forEach((label) => {
      if (label.getAttribute('tabindex')) {
        label.removeAttribute('tabindex')
      } else {
        label.setAttribute('tabindex', 0)
      }
    })
  }

  handleFilterOffClick = (e) => {
    if (this.filtersMain.querySelector('.is-expanded')) {
      if (!e.target.closest('.list-filter')) {
        this.filters.forEach((filter) => {
          filter.classList.remove('is-expanded')
        })
      }
    }
  }

  updateFilter = (label) => {
    if (label) {
      const value = label.children[0].value // input val
      const filterType = label.parentNode.parentNode.getAttribute('data-filter')

      // if already active, find index and remove from array
      if (label.classList.contains('is-active')) {
        const filterIndex = this.activeFilters[filterType].map(item => {
          return item
        }).indexOf(value)

        this.activeFilters[filterType].splice(filterIndex, 1)
      } else {
        this.activeFilters[filterType].push(value)
      }

      label.classList.toggle('is-active')

      this.updateList()
    }
  }

  updateList = () => {
    const currentFilters = {}

    for (const key of Object.keys(this.activeFilters)) {
      const val = this.activeFilters[key]
      if (val.length) {
        currentFilters[key] = val
      }
    }

    var matchesFound = 0

    this.facilities.forEach((facility, index) => {
      const dataset = facility.dataset
      let matches = 0
      let conditions = 0

      for (const key in currentFilters) {
        if (currentFilters.hasOwnProperty(key)) {
          conditions++
          for (let k = 0; k < currentFilters[key].length; k++) {
            if (dataset[key].includes(currentFilters[key][k])) {
              matches++
              break
            }
          }
        }
      }

      if (matches === conditions) {
        facility.classList.add('is-active')
        this.markers[index].setVisible(true)
        matchesFound++
      } else {
        facility.classList.remove('is-active')
        this.markers[index].setVisible(false)
      }
    })

    if (this.search.value) {
      this.handleSearch(this.search.value)
    } else {
      this.updateTotalText(matchesFound)
      this.updateBounds(matchesFound)
    }
  }

  updateScrollPosition = (searched = false) => {
    if (!this.scrolling) {
      // bring the map into full view if current scroll has not reached it
      if (getScrollTop() <= this.hero.offsetHeight - 10) {
        this.scrolling = true

        jump(this.elem, {
          duration: 750,
          callback: () => {
            this.scrolling = false
          }
        })

        return
      }

      // bring scroll to top after searching
      if (searched) {
        jump(this.elem, {
          duration: 0,
        })
      }
    }
  }

  updateBounds = (matches) => {
    // if searching and no matches are found
    // fallback to the maps original position
    if (!matches) {
      this.map.fitBounds(this.startingBounds)
      return
    }

    // if searches are found then create new map bounds and update
    // position based off the visible markers
    var newBounds = new google.maps.LatLngBounds()

    this.markers.forEach((marker) => {
      if (marker.getVisible()) {
        newBounds.extend(marker.getPosition())
      }
    })

    this.map.fitBounds(newBounds)
  }

  toggleCardState = (toggleElem, fromCard = false) => {
    var expandArea = toggleElem.nextElementSibling
    var contentHeight = expandArea.children[0].offsetHeight
    var index = this.facilities.indexOf(toggleElem.parentElement)

    // if another marker is already active unset it
    if (this.activeMarker) {
      this.activeMarker.setIcon(this.icon)
      this.activeMarker.zIndex = 1

      // if clicking on a different marker, collapse the previously active card
      if (index !== this.activeMarker.index) {
        this.facilities[this.activeMarker.index].classList.remove('is-expanded')
        this.facilities[this.activeMarker.index].children[1].classList.remove('no-overflow')
        this.facilities[this.activeMarker.index].children[1].style.maxHeight = 0
      }
    }

    // toggle the card expand state and updates its marker on the map
    if (toggleElem.parentElement.classList.contains('is-expanded')) {
      toggleElem.parentElement.classList.remove('is-expanded')
      expandArea.classList.remove('no-overflow')
      expandArea.style.maxHeight = 0
    } else {
      toggleElem.parentElement.classList.add('is-expanded')
      expandArea.style.maxHeight = `${contentHeight}px`
      this.markers[index].setIcon(this.iconActive)
      this.markers[index].zIndex = 2
      this.activeMarker = this.markers[index]

      setTimeout(() => {
        expandArea.classList.add('no-overflow')
      }, 250)

      this.updateUrl(toggleElem.parentElement.dataset.slug)
    }

    if (fromCard) {
      this.updateScrollPosition()
    }
  }

  handleCardHover = (e) => {
    var index = this.facilities.indexOf(e.currentTarget)
    this.markers[index].setIcon(this.iconActive)
    this.markers[index].zIndex = 2
  }

  handleCardHoverExit = (e) => {
    if (!e.currentTarget.classList.contains('is-expanded')) {
      var index = this.facilities.indexOf(e.currentTarget)
      this.markers[index].setIcon(this.icon)
      this.markers[index].zIndex = 1
    }
  }

  handleSearch = (value) => {
    if (!value.length) {
      this.updateList()
    } else if (value.length >= 3) {
      var matchesFound = 0
      // if filters are currently active
      // only search active rows
      if (document.querySelector('.list-filter__item.is-active')) {
        var activerows = []

        this.facilities.forEach((facility, i) => {
          if (facility.classList.contains('is-active')) {
            activerows.push(i)
          }
        })

        activerows.forEach((index) => {
          let isMatch = false

          // loop through searchable text and check if searchVal exists
          if (this.textContents[index].indexOf(value) !== -1) {
            isMatch = true
          }

          if (isMatch) {
            this.facilities[index].classList.add('is-active')
            this.markers[index].setVisible(true)
            matchesFound++
          } else {
            this.facilities[index].classList.remove('is-active')
            this.markers[index].setVisible(false)
          }
        })
      } else {
        this.textContents.forEach((content, index) => {
          let isMatch = false

          // loop through searchable text and check if searchVal exists
          if (content.indexOf(value) !== -1) {
            isMatch = true
          }

          if (isMatch) {
            this.facilities[index].classList.add('is-active')
            this.markers[index].setVisible(true)
            matchesFound++
          } else {
            this.facilities[index].classList.remove('is-active')
            this.markers[index].setVisible(false)
          }
        })
      }

      this.updateTotalText(matchesFound)
      this.updateBounds(matchesFound)
    }

    this.updateScrollPosition(true)
    this.updateUrl()
  }

  handleSearchCancel = () => {
    this.search.value = ''
    this.handleSearch(this.search.value)
  }

  updateTotalText = (matches) => {
    var facilitiesStr = (matches !== 1) ? 'Facilities' : 'Facility'
    this.resultsCount.textContent = `Showing: ${matches} ${facilitiesStr}`
  }

  handleParam = () => {
    var paramElem = this.elem.querySelector(`[data-slug="${this.facilityParam}"]`)

    if (paramElem) {
      this.toggleCardState(paramElem.children[0])

      setTimeout(() => {
        jump(paramElem, {
          duration: 0,
          offset: -(this.filtersMain.offsetHeight + 15)
        })
      }, 250)
    }
  }

  updateUrl = (param) => {
    var urlParam = ''

    if (param) {
      urlParam = `?facility=${param}`
    }

    var newurl = `${window.location.protocol}//${window.location.host + window.location.pathname + urlParam}`
    window.history.replaceState({ path: newurl }, '', newurl)
  }
}

new CoreFacilities()
