export default function initAccordionList() {
  const accordinList = document.querySelectorAll('[data-anima="accordion"] dt')
  const activeList = 'active'

  if (accordinList.length) { //verificar se existe o .js-accordion dt, caso não exista, vai da erro.
    accordinList[0].classList.add(activeList)
    accordinList[0].nextElementSibling.classList.add(activeList)

    function activeAccordion() {
      this.classList.toggle(activeList)
      this.nextElementSibling.classList.toggle(activeList)
    }

    accordinList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}