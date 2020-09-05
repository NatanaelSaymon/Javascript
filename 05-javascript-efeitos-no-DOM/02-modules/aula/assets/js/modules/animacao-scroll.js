export default function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll')
  const windowMetade = window.innerHeight * 0.6

  if (sections.length) {
    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionVisible = (sectionTop - windowMetade) < 0
        if (sectionVisible) {
          section.classList.add('active')
        } else {
          section.classList.remove('active')
        }
      })
    }

    scrollAnimation()

    window.addEventListener('scroll', scrollAnimation)
  }
}