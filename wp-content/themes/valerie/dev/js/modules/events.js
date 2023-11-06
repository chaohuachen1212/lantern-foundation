import jump from 'jump.js'
import { debounce } from 'throttle-debounce'
import { getScrollTop } from '../helpers/dom'

class EventsList {
  constructor() {
    this.elem = document.querySelector('.community-events-main')

    if (this.elem) {
      this.filtersMain = this.elem.querySelector('.list-filters')
      this.filters = this.filtersMain.querySelectorAll('.list-filter')
      this.eventsItems = this.elem.querySelectorAll('.event-item')
      this.eventContainers = this.elem.querySelectorAll('.events-month-wrap')
      this.yearContainers = this.elem.querySelectorAll('.events-year-wrap')
      this.eventMonthsNav = this.elem.querySelectorAll('.events-months-nav-item')
      this.search = this.filtersMain.querySelector('.list-filters__search')
      this.searchCancel = this.elem.querySelector('.search-cancel')
      this.searchContent = []
      this.activeFilters = {}

      this.events()
      this.buildFiltersObj()
    }
  }

  buildFiltersObj = () => {
    this.filters.forEach((filter) => {
      const filterSlug = filter.getAttribute('data-filter')
      this.activeFilters[filterSlug] = []
    })
  }

  events = () => {
    this.filtersMain.addEventListener('submit', this.handleSearch)
    this.filtersMain.addEventListener('click', this.handleClick)
    this.filtersMain.addEventListener('keypress', this.handleKeyPress)
    document.addEventListener('click', this.handleFilterOffClick)

    this.search.addEventListener('keyup', debounce(375, e => {
      this.searchEvents(e.target.value)
    }))

    this.eventsItems.forEach((elem) => {
      this.indexSearch(elem)
    })

    this.searchCancel.addEventListener('click', this.handleSearchCancel)
  }

  indexSearch = (event) => {
    // pull out the searchable text we'll use for quicksearching
    var searchItems = [...event.querySelectorAll('.search-item')].map((elem) => {
      return elem.textContent.toLowerCase().trim()
    }).join(' ')

    this.searchContent.push(searchItems)
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

      if (focusEl.classList.contains('list-filter__item')) {
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

      this.updateEventsList()
    }
  }

  updateEventsList = () => {
    const currentFilters = {}

    for (const key of Object.keys(this.activeFilters)) {
      const val = this.activeFilters[key]
      if (val.length) {
        currentFilters[key] = val
      }
    }

    this.eventsItems.forEach((event) => {
      const dataset = event.dataset
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
        event.classList.add('is-active')
      } else {
        event.classList.remove('is-active')
      }
    })

    if (this.search.value) {
      this.searchEvents(this.search.value)
    } else {
      this.updateMonthList()
    }

    if (window.innerWidth > 768) {
      this.jumpToTop()
    }
  }

  updateMonthList = () => {
    this.eventContainers.forEach((container, i) => {
      const activeItems = container.querySelectorAll('.event-item.is-active')
      const monthText = this.eventMonthsNav[i].dataset.month

      if (activeItems.length) {
        this.eventMonthsNav[i].innerHTML = `${monthText} <span>(${activeItems.length})</span>`
        this.eventMonthsNav[i].classList.remove('is-empty')
      } else {
        this.eventMonthsNav[i].innerHTML = `${monthText} (0)`
        this.eventMonthsNav[i].classList.add('is-empty')
      }
    })

    // check if there are any events showing for a given year and show/hide the container
    this.yearContainers.forEach((container) => {
      if (container.querySelector('.event-item.is-active')) {
        container.style.display = 'block'
      } else {
        container.style.display = 'none'
      }
    })
  }

  searchEvents = (val) => {
    const searchVal = val.trim().toLowerCase()

    if (!searchVal.length) {
      this.updateEventsList()
    } else if (searchVal.length >= 3) {
      // if filters are currently active
      // only search active rows
      if (document.querySelector('.list-filter__item.is-active')) {
        var activerows = []

        this.eventsItems.forEach((event, i) => {
          if (event.classList.contains('is-active')) {
            activerows.push(i)
          }
        })

        activerows.forEach((index) => {
          let isMatch = false

          // loop through searchable text and check if searchVal exists
          if (this.searchContent[index].indexOf(searchVal) !== -1) {
            isMatch = true
          }

          if (isMatch) {
            this.eventsItems[index].classList.add('is-active')
          } else {
            this.eventsItems[index].classList.remove('is-active')
          }
        })
      } else {
        this.searchContent.forEach((content, i) => {
          let isMatch = false

          // loop through searchable text and check if searchVal exists
          if (content.indexOf(searchVal) !== -1) {
            isMatch = true
          }

          if (isMatch) {
            this.eventsItems[i].classList.add('is-active')
          } else {
            this.eventsItems[i].classList.remove('is-active')
          }
        })
      }
    }

    this.updateMonthList()
  }

  handleSearchCancel = () => {
    this.search.value = ''
    this.updateEventsList()
  }

  jumpToTop = () => {
    jump(this.elem, {
      duration: 750
    })
  }
}

new EventsList()
