export function menu() {
  class MobileNavbar {
    constructor(
      mobileMenu,
      navList,
      navLinks,
      subNavLinks,
      navLinks2,
      navLinks3,
    ) {
      this.body = document.querySelector('body')
      this.mobileMenu = document.querySelector(mobileMenu)
      this.navList = document.querySelector(navList)
      this.navLinks = document.querySelectorAll(navLinks)
      this.subNavLinks = document.querySelectorAll(subNavLinks)
      this.navLinks2 = document.querySelectorAll(navLinks2)
      this.navLinks3 = document.querySelectorAll(navLinks3)
      this.activeClass = 'active'
      this.handleClick = this.handleClick.bind(this)
      this.animateLinks()
    }

    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = '')
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`)
      })
      this.subNavLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = '')
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`)
      })
    }

    handleClick() {
      this.navList.classList.toggle(this.activeClass)
      this.mobileMenu.classList.toggle(this.activeClass)
      this.body.classList.toggle(this.activeClass)
    }

    addClickEvent() {
      this.mobileMenu.addEventListener('click', this.handleClick)
      this.navLinks2.forEach((item) => {
        item.addEventListener('click', this.handleClick)
      })
      this.navLinks3.forEach((item) => {
        item.addEventListener('click', this.handleClick)
      })
    }

    init() {
      if (this.mobileMenu) {
        this.addClickEvent()
      }
      return this
    }
  }
  const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li',
    '.sub-nav-list li',
    '.nav-list li a',
    '.nav-list .mobile-nav-list li a',
  )
  mobileNavbar.init()
}
