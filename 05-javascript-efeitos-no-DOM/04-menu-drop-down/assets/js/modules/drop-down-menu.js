export default function initDropDownMenu(){
  const dropDownMenus = document.querySelectorAll('[data-dropdown]')

  function handleClick(event){
    event.preventDefault();
    this.classList.toggle('active')
  }

  dropDownMenus.forEach((menu) => {
    menu.addEventListener('click', handleClick) //evento de click
    menu.addEventListener('touchstart', handleClick) //evento de toque mobile

    // Caso queira fazer de uma forma mais otimizada
    // const eventos = ['click', 'touchstart'] //array que contem os eventos

    // eventos.forEach((evento) =>{
    //   menu.addEventListener(evento, handleClick)
    // })
  })
}