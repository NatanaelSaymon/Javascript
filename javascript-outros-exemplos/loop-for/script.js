
// LOOP FOR 
let contagem = '';

for(let cont = 1; cont <= 10; cont++){
    contagem = contagem + cont + '<br>'
}

document.getElementById('demo').innerHTML = contagem;


// LOOP FOR COM ARRAY
let carros = ['Ferrari', 'Fusca', 'Gol', 'Fiat', 'Lamborghini']

let html = '<ul>';

for(let c in carros){
    html += `<li> ${carros[c]} </li>`;
}

html += '</ul>'

document.getElementById('array').innerHTML = html;

