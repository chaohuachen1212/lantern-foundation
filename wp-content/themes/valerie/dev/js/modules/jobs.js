import jump from 'jump.js'
import { debounce } from 'throttle-debounce'
import { getScrollTop } from '../helpers/dom'

class Jobs {
  constructor() {
    this.elem = document.querySelector('.jobs-main')

    if (this.elem) {
      this.hero = document.querySelector('.short-hero')
      this.filtersMain = this.elem.querySelector('.list-filters')
      this.filters = this.filtersMain.querySelectorAll('.list-filter')
      this.search = this.filtersMain.querySelector('.list-filters__search')
      this.searchCancel = this.elem.querySelector('.search-cancel')
      this.jobs = this.elem.querySelectorAll('.job')
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

  indexSearch = (job) => {
    // pull out the searchable text we'll use for quicksearching
    var searchItems = [...job.querySelectorAll('.search-item')].map((elem) => {
      return elem.textContent.toLowerCase().trim()
    }).join(' ')

    this.searchContent.push(searchItems)
  }

  events = () => {
    this.filtersMain.addEventListener('submit', this.handleSearch)
    this.filtersMain.addEventListener('click', this.handleClick)
    this.filtersMain.addEventListener('keypress', this.handleKeyPress)
    document.addEventListener('click', this.handleFilterOffClick)

    this.jobs.forEach((elem) => {
      elem.children[0].addEventListener('click', (e) => {
        this.handleExpand(e.currentTarget)
      })

      this.indexSearch(elem)
    })

    this.search.addEventListener('keyup', debounce(375, e => {
      this.searchJobs(e.target.value)
    }))

    this.searchCancel.addEventListener('click', this.handleSearchCancel)
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

  handleExpand = (toggle) => {
    var expandArea = toggle.parentElement.querySelector('.job__description')
    var contentHeight = expandArea.offsetHeight

    // toggles the card expand state and updates its marker on the map
    if (toggle.parentElement.classList.contains('is-expanded')) {
      toggle.parentElement.classList.remove('is-expanded')
      expandArea.parentElement.style.maxHeight = 0
    } else {
      // close other expanded card if set
      var otherExpanded = this.elem.querySelector('.job.is-expanded')
      if (otherExpanded) {
        otherExpanded.classList.remove('is-expanded')
        otherExpanded.querySelector('.job__expand').style.maxHeight = 0
      }

      toggle.parentElement.classList.add('is-expanded')
      expandArea.parentElement.style.maxHeight = `${contentHeight}px`
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

      this.updateJobsList()
    }
  }

  updateJobsList = () => {
    const currentFilters = {}

    for (const key of Object.keys(this.activeFilters)) {
      const val = this.activeFilters[key]
      if (val.length) {
        currentFilters[key] = val
      }
    }

    this.jobs.forEach((job) => {
      const dataset = job.dataset
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
        job.classList.add('is-active')
      } else {
        job.classList.remove('is-active')
      }
    })

    if (this.search.value) {
      this.searchJobs(this.search.value)
    }

    if (window.innerWidth > 768) {
      this.jumpToTop()
    }
  }

  searchJobs = (val) => {
    const searchVal = val.trim().toLowerCase()

    if (!searchVal.length) {
      this.updateJobsList()
    } else if (searchVal.length >= 3) {
      // if filters are currently active
      // only search active rows
      if (document.querySelector('.list-filter__item.is-active')) {
        var activerows = []

        this.jobs.forEach((job, i) => {
          if (job.classList.contains('is-active')) {
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
            this.jobs[index].classList.add('is-active')
          } else {
            this.jobs[index].classList.remove('is-active')
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
            this.jobs[i].classList.add('is-active')
          } else {
            this.jobs[i].classList.remove('is-active')
          }
        })
      }
    }

    if (window.innerWidth > 768) {
      this.jumpToTop()
    }
  }

  handleSearchCancel = () => {
    this.search.value = ''
    this.updateJobsList()
  }

  jumpToTop = () => {
    if (getScrollTop() > this.hero.offsetHeight) {
      jump(this.elem, {
        duration: 0
      })
    }
  }
}

new Jobs()
