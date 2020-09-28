import outsideClick from './outsideclick.js'

export default function initMenuMobile(){
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')

    function openMenu(event){
        menuButton.classList.add('active')
        menuList.classList.add('active')

        outsideClick(menuList, ["click", "touchstart"], () => {
            menuButton.classList.remove('active')
            menuList.classList.remove('active')
        })
    }

    menuButton.addEventListener("click", openMenu)
}