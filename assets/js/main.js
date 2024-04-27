import { setupGrid } from './dynamic-grid.js'
import { handleSendJoinForm } from './join-form.js'
import { typeWrite } from './typeWrite.js'
import { initScrollReveal } from './scrollReveal.js'
import { menu } from './menu.js'
import { showScrollTopButton } from './showScrollTopButton.js'

menu()
initScrollReveal()
setupGrid('.rider-card', 'show-more-riders-button')
typeWrite(document.querySelector('.typewriter'))

window.onscroll = function () {
  showScrollTopButton(document.querySelector('.scroll-top-button'))
}

document.querySelector('form').addEventListener('submit', handleSendJoinForm)
