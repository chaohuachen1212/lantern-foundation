if (document.body.classList.contains('page-about')) {
  var aboutSections = document.querySelectorAll('.about-section')
  var navItems = document.querySelectorAll('.about-rail__nav-item')

  aboutSections.forEach((section) => {
    var waypointDown = new Waypoint({
      element: section,
      handler: function(direction) {
        if (direction === 'down') {
          document.querySelector('.about-rail__nav-item.is-active').classList.remove('is-active')
          document.querySelector(`[href="#${section.id}"]`).classList.add('is-active')
        }
      },
      offset: '40%'
    })


    var waypointUp = new Waypoint({
      element: section,
      handler: function(direction) {
        if (direction === 'up') {
          document.querySelector('.about-rail__nav-item.is-active').classList.remove('is-active')
          document.querySelector(`[href="#${section.id}"]`).classList.add('is-active')
        }
      },
      offset: '-20%'
    })
  })

  navItems.forEach((navItem) => {
    navItem.addEventListener('click', (e) => {
      Waypoint.disableAll()
      document.querySelector('.about-rail__nav-item.is-active').classList.remove('is-active')
      navItem.classList.add('is-active')

      setTimeout(() => {
        Waypoint.enableAll()
      }, 500)
    })
  })
}
