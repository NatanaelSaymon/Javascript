function menuToggle(){
    let menu = document.getElementById("menu-area")
    
    if(menu.classList.contains('menu-opend') == true){
        menu.classList.remove('menu-opend')
    }
    else{
        menu.classList.add('menu-opend')
    }
}

/**
 * ANOTAÇÕES
 * 
 * Contains: significa "procurar"
 * Remove: significa "remover"
 * Add: significa "adicionar"
 */