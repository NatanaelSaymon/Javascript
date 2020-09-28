import outsideClick from './outsideclick.js';

export default function initDropDownMenu(){
  const dropDownMenus = document.querySelectorAll('[data-dropdown]')

  dropDownMenus.forEach((menu) => {
    const eventos = ['click', 'touchstart'] //array que contem os eventos
    // click: evento de click
    // touchstart: evento de toque mobile
    eventos.forEach((evento) =>{
      menu.addEventListener(evento, handleClick)
    })
  })

  //funcao que verifica o "tipo de evento"
  function handleClick(event){ 
    event.preventDefault() 
    this.classList.add('active')
    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove(' active')
    }) 
  }
}