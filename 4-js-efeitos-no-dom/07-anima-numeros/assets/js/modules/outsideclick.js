export default function outsideClick(element, events, callback){ 
    const html = document.documentElement;
    const data_outside = 'data-outside';

    if(!element.hasAttribute(data_outside)){
        events.forEach(evento => {
            setTimeout(() => { html.addEventListener(evento, handleOutsideClick) })
        })
        element.setAttribute(data_outside, '')
    }
    
    function handleOutsideClick(event){
        if(!element.contains(event.target)){
            element.removeAttribute(data_outside)
            events.forEach((evento) => {
                html.removeEventListener(evento, handleOutsideClick)
            })
            callback()
        }
    }
}

