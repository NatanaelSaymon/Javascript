import outsideClick from './outsideclick.js'

export default function initMenuMobile(){
    let menuButton = document.querySelector('[data-menu="button"]')
    let menuList = document.querySelectorAll('ul [data-menu="list"]')

    function openMenu(){
        menuButton.classList.add('active')
        menuList.classList.add('active')

        outsideClick(menuList, ["click", "touchstart"], () => {
            menuButton.classList.remove('active')
            menuList.classList.remove('active')
        })
    }

    menuButton.addEventListener("click", openMenu)
}