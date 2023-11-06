import jump from 'jump.js'
import { getOffsetTop, getScrollTop } from '../helpers/dom'
import { throttle } from 'throttle-debounce'

class FilterResources {
  constructor(elem) {
    // DOM variables
    this.elem = elem
    this.filterLists = this.elem.querySelectorAll('.resources-filter-list')
    this.filterItems = this.elem.querySelector('.resource-filter-item')
    this.postsAreaParent = this.elem.querySelector('.resources-posts-main')
    this.postsArea = this.elem.querySelector('.resources-posts-area')
    this.postTemplate = document.querySelector('.post-template')
    this.latestPosts = this.elem.querySelector('.resources-latest')
    this.filtersMain = this.elem.querySelector('form')
    this.search = this.elem.querySelector('.resources-search')
    this.searchCancel = this.elem.querySelector('.search-cancel')
    this.currentPostCount = this.elem.querySelector('.resources-posts-current-total')
    this.jumpToTop = this.elem.querySelector('.resources-jump')
    this.layoutToggles = this.elem.querySelectorAll('.resource-layout-toggle')

    this.postsAreaHeight = this.postsArea.offsetHeight
    this.postsAreaTop = getOffsetTop(this.postsArea)
    this.page = 1
    this.maxPage = parseInt(this.postsArea.dataset.maxPage)
    this.excludeIds = this.postsArea.dataset.exclude

    this.fetching = false
    this.postsBuilt = true

    this.activeFilters = {}

    // events
    this.events()
    this.buildFiltersObj()
  }

  buildFiltersObj = () => {
    for (let i = 0; i < this.filterLists.length; i++) {
      const filterSlug = this.filterLists[i].getAttribute('data-filter')
      this.activeFilters[filterSlug] = []
    }
  }

  events = () => {
    this.filtersMain.addEventListener('submit', this.handleSearch)
    this.filtersMain.addEventListener('click', this.handleClick)
    this.filtersMain.addEventListener('keypress', this.handleKeyPress)

    this.searchCancel.addEventListener('click', this.handleSearchCancel)

    for (let i = 0; i < this.layoutToggles.length; i++) {
      this.layoutToggles[i].addEventListener('click', this.handleLayoutToggle)
    }

    this.jumpToTop.addEventListener('click', this.jumpBackToTop)

    window.addEventListener('scroll',
      throttle(375, e => {
        this.handleScroll()
      })
    )
  }

  handleScroll = (event) => {
    const scrollBottom = getScrollTop() + window.innerHeight
    const postsAreaBottom = this.postsAreaTop + this.postsAreaHeight
    const trigger = scrollBottom > postsAreaBottom - (window.innerHeight * 1.25)

    if (trigger && !this.fetching && this.postsBuilt) {
      this.postsBuilt = false
      if (this.page + 1 <= this.maxPage) {
        this.getPosts(true, this.page + 1)
      }
    }
  }

  handleClick = (e) => {
    if (e.target.matches('input') && e.target.type === 'checkbox') {
      const parent = e.target.parentNode
      this.updateFilter(parent)
    }
  }

  handleKeyPress = (e) => {
    if (13 === e.keyCode) {
      const focusEl = document.activeElement

      if (focusEl.classList.contains('resource-filter-item')) {
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

      this.getPosts()
    }
  }

  handleSearch = (e) => {
    e.preventDefault()

    if (!this.fetching) {
      this.getPosts()
    }
  }

  handleSearchCancel = () => {
    this.search.value = ''
    this.getPosts()
  }

  getPosts = (fromScroll = false, page = 1) => {
    this.fetching = true
    this.filtersMain.classList.add('is-fetching')

    // const categoryValues = this.activeFilters['category'].join(',')
    // const formatValues = this.activeFilters['format'].join(',')
    let fetchUrl = `/wp-json/bina/v1/resources?page=${page}`

    if (this.search.value.length) {
      fetchUrl += `&search=${encodeURIComponent(this.search.value)}`
    } else {
      fetchUrl += `&exclude=${encodeURIComponent(this.excludeIds)}`
    }

    fetch(fetchUrl, {
      cache: 'no-cache',
      method: 'GET',
    }).then(response => response.json())
      .catch(error => {
        const noResultsElem = document.createElement('div')
        noResultsElem.classList.add('resources-no-results')
        noResultsElem.textContent = 'There was an error, please refresh and try again.'
        this.postsArea.appendChild(noResultsElem)
        console.log(error)
      })
      .then(result => {
        // check returned value
        if (
          !('max_page' in result &&
          Number.isInteger(result.max_page) &&
          'page' in result &&
          Number.isInteger(result.page) &&
          'posts' in result &&
          Array.isArray(result.posts))
        ) {
          console.log(result)
        } else {
          this.filtersMain.classList.remove('is-fetching')
          this.fetching = false

          if (!fromScroll) {
            this.postsAreaParent.classList.add('is-exiting')
          }

          this.page = result.page
          this.maxPage = result.max_page

          window.setTimeout(() => {
            if (!fromScroll) {
              this.latestPosts.remove()
              this.erasePostsArea()
            }

            this.buildNewPosts(result.posts)

            window.setTimeout(() => {
              this.postsAreaParent.classList.remove('is-exiting')

              if (result.posts.length) {
                this.currentPostCount.textContent = `${this.postsArea.childElementCount} of ${result.total}`
              } else {
                this.currentPostCount.textContent = ''
              }
            }, 0)
          }, 300)
        }
      })
  }

  jumpBackToTop = () => {
    jump(this.elem, {
      duration: 500,
    })
  }

  erasePostsArea = () => {
    while (this.postsArea.lastChild) {
      this.postsArea.removeChild(this.postsArea.lastChild)
    }
  }

  buildNewPosts = (posts) => {
    if (posts.length) {
      posts.forEach(post => {
        const newNode = this.postTemplate.cloneNode(true)

        newNode.href = post.link
        newNode.querySelector('.resources-post__title').textContent = post.title
        newNode.querySelector('.resources-post__body').textContent = post.description

        if (post.category) {
          newNode.title = `${post.category} - ${post.title}`
        } else {
          newNode.title = post.title
        }

        if (post.img) {
          var imgElem = document.createElement('img')
          imgElem.src = post.img
          newNode.querySelector('.resources-post__img').appendChild(imgElem)
        }

        this.postsArea.appendChild(newNode)
      })
    } else {
      const noResultsElem = document.createElement('div')
      noResultsElem.classList.add('resources-no-results')
      noResultsElem.textContent = 'No resources found!'
      this.postsArea.appendChild(noResultsElem)
    }

    this.postsAreaHeight = this.postsArea.offsetHeight
    this.postsAreaTop = getOffsetTop(this.postsArea)
    this.postsBuilt = true
  }

  handleLayoutToggle = (e) => {
    const toggle = e.target

    if (toggle.dataset.layout === 'list') {
      this.postsAreaParent.classList.add('is-list')
    } else {
      this.postsAreaParent.classList.remove('is-list')
    }
  }
}

export default FilterResources
