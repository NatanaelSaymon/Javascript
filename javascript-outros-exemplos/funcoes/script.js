function ativarfuncao(){
    var area = document.getElementById("area")
    area.style.background = "black"
    area.style.color = "white"
    area.style.width = "350px"
    area.style.height = "350px"
}

function preto(){
    limpar();
    document.getElementById("troca").classList.add('preto')
    
}

function vermelho(){
    limpar();
    document.getElementById("troca").classList.add('vermelho')
}

function azul(){
    limpar();
    document.getElementById("troca").classList.add('azul')
}

function limpar(){
    document.getElementById("troca").classList.remove("preto", "vermelho", "azul");
}

function mostrarTelefone(){
    let tel = document.getElementById("telefone")

    if(tel.style.display == "none"){
        tel.style.display = "block";
    }
    else{
        tel.style.display = "none";
    }
    
    /*
    
    Ou podemos fazer assim: 

    document.getElementById("telefone").style.display = "block"

    */
}