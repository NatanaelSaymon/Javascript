var data = new Date();
var dia_da_semana = data.getDay();
var hora = data.getHours();
var min = data.getMinutes();

if(dia_da_semana == 0){
    dia_da_semana = "Domingo"
}else if(dia_da_semana == 1){
    dia_da_semana = "Segunda-feira"
}else if(dia_da_semana == 2){
    dia_da_semana = "Terça-feira"
}else if(dia_da_semana == 3){
    dia_da_semana = "Quarta-feira"
}else if(dia_da_semana == 4){
    dia_da_semana = "Quinta-feira"
}else if(dia_da_semana == 5){
    dia_da_semana = "Sexta-feira"
}else{
    dia_da_semana = "Sabado"
}

if( hora < 12){
    document.write("<br/>Hoje é " + dia_da_semana + " e são: " + hora + ":"+ min + " horas, bom dia!")
}else if(hora >= 12 && hora <= 18){
    document.write("<br/>Hoje é: " + dia_da_semana + " e são " + hora + ":" + min + " horas, boa tarde!")
}else{
    document.write("<br/>Hoje é: " + dia_da_semana + " e são " + hora + ":" + min +  " horas, boa noite!")
}

// Obtém a data/hora atual
// var data = new Date();

// // Guarda cada pedaço em uma variável
// var dia     = data.getDate();           // 1-31
// var dia_sem = data.getDay();            // 0-6 (zero=domingo)
// var mes     = data.getMonth();          // 0-11 (zero=janeiro)
// var ano2    = data.getYear();           // 2 dígitos
// var ano4    = data.getFullYear();       // 4 dígitos
// var hora    = data.getHours();          // 0-23
// var min     = data.getMinutes();        // 0-59
// var seg     = data.getSeconds();        // 0-59
// var mseg    = data.getMilliseconds();   // 0-999
// var tz      = data.getTimezoneOffset(); // em minutos

// // Formata a data e a hora (note o mês + 1)
// var str_data = dia + '/' + (mes+1) + '/' + ano4;
// var str_hora = hora + ':' + min + ':' + seg;

// // Mostra o resultado
// alert('Hoje é ' + str_data + ' às ' + str_hora);

