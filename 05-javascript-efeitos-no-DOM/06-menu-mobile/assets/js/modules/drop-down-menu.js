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

  function handleClick(event){ //funcao que verifica o tipo de evento
    event.preventDefault() 
    this.classList.add('active')
    outsideClick(this, () => {
      this.classList.remove('active')
    })
  }

  function outsideClick(element, callback){ //funcao que verifica se o click foi do lado de fora
    const html = document.documentElement
    html.addEventListener('click', handleOutsideClick)
    function handleOutsideClick(event){
      if(!element.contains(event.target)){
        html.removeEventListener('click', handleOutsideClick)
        callback()
      }
    }
  }
}