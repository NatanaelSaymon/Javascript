export default function initModal(){
  const btnAbrir = document.querySelector('[data-modal="abrir"]')
  const btnFechar = document.querySelector('[data-modal="fechar"]')
  const containerModal = document.querySelector('[data-modal="modal-container"]')

  if(btnAbrir && btnFechar && containerModal){
    function abrirModal(event){
      event.preventDefault()
      containerModal.classList.add('active')
    }

    function fecharModal(event){
      event.preventDefault()
      containerModal.classList.remove('active')
    }

    function clicForaModal(event){
      if(event.target == this){
        fecharModal(event)
      }
      
    }

    btnAbrir.addEventListener('click', abrirModal)
    btnFechar.addEventListener('click', fecharModal)
    containerModal.addEventListener('click', clicForaModal)
  }
}