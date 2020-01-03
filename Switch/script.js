let data = new Date(); //Pegando a data do sistema
let dia = data.getDay(); //Pegando o dia do sistema
let dianome = '';

switch(dia){
    case 0:
        dianome = "Domingo";
        break;
    case 1:
        dianome = 'Segunda-feira';
        break;
    case 2:
        dianome = 'Terça-feria';
        break;
    case 3:
        dianome = 'Quarta-feria';
        break;
    case 4:
        dianome = 'Quinta-feria';
        break;
    case 5:
        dianome = 'Sexta-feira';
        break;
    case 6: 
        dianome = 'Sabado';
        break;
}

document.getElementById('dia').innerHTML = `<p>Hoje é ${dianome}</p>`;

