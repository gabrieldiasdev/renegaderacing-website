export function showScrollTopButton(button) {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    button.classList.add('active')
  } else {
    button.classList.remove('active')
  }
}
