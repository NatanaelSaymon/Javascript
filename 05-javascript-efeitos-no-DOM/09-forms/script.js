
const formulario = document.querySelector('#contato')

function validacao(event){
    const target = event.target

    if(!target.checkValidity()){
        target.classList.add('invalido')
        target.nextElementSibling.innerText = target.validationMessage 
        //inseri uma msg dentro do proximo elemento, neste caso "span"
    }
    else{
        target.classList.remove('invalido')
        target.nextElementSibling.innerText = ""
    }
}

formulario.addEventListener('change', validacao)