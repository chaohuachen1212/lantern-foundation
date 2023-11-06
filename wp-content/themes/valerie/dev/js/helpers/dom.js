const getOffsetTop = elem => {
  // get offset top relative to document
  const rect = elem.getBoundingClientRect()
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return rect.top + scrollTop
}

const getIndex = el => (
  Array.from(el.parentNode.children).indexOf(el)
)

const getAncestor = (el, className) => {

  while ((el = el.parentElement) && !el.classList.contains(className));

  return el
}

const getScrollTop = () => {
  const top = window.scrollY || document.documentElement.scrollTop
  return top
}

const getUrlParameter = () => {
  let vars = {}
  let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value
  })
  return vars
}

const isTouchDevice = () => {
  return 'ontouchstart' in document.documentElement
}

const isJson = str => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

const cumulativeOffset = element => {
  let top = 0
  let left = 0
  do {
    top += element.offsetTop || 0
    left += element.offsetLeft || 0
    element = element.offsetParent
  } while (element)

  return { top, left }
}

export {
  getOffsetTop,
  getIndex,
  getAncestor,
  getScrollTop,
  getUrlParameter,
  isTouchDevice,
  isJson,
  cumulativeOffset
}
