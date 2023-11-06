class CookieBanner {
  constructor(elem) {
    this.elem = document.querySelector('.cookie-banner')

    if (this.elem) {
      this.cta = this.elem.querySelector('.cookie-banner__accept')
      this.bannerCookieName = 'cookie_banner'

      this.events()
      this.detectCookie()
    }
  }

  events = () => {
    this.cta.addEventListener('click', this.handleCta)
  }

  setCookie = () => {
    var d = new Date()
    d.setTime(d.getTime() + (100*365*24*60*60*1000))

    var expiration = d.toUTCString()
    document.cookie = `${this.bannerCookieName}=1;expires=${expiration};path=/`
  }

  handleCta = () => {
    this.elem.classList.remove('is-active')
    this.setCookie()
  }

  detectCookie = () => {
    // first check if cookie exists
    var bannerCookie = document.cookie.split(';').filter(item => {
      return item.trim().indexOf(`${this.bannerCookieName}=`) == 0
    })

    // show banner if cookie is not found
    if (!bannerCookie.length) {
      this.elem.classList.add('is-active')
    }
  }
}

new CookieBanner()
