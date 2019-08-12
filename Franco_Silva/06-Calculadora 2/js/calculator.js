//objeto literal o estructura
// usar para evitar para ahcer switch y ejecutar las operaciones
const todasLasOperaciones = {
    "+" : function (numero1, numero2) {return numero1 + numero2},
    "-" : function (numero1, numero2) {return numero1 - numero2},
    "*" : function (numero1, numero2) {return numero1 * numero2},
    "/" : function (numero1, numero2) {return numero1 / numero2},
}




let calculadora = function () {
    console.log("Calculadora cargada");
    let valorActual = "";
    let resultado = "";
    let operacionEjecutar = '';
    const calculadora = document.querySelector ('.calculadora');
   
    const numero = calculadora.querySelector ('.number');
    const visor = calculadora.querySelector ('.visor');
    const operation = calculadora.querySelector ('.operation');
    const igual = calculadora.querySelector ('.igual');

    //eventos de los numeros

    numero.addEventListener('click', function(evento){
        //obtener el numero del evento
        valorActual = parseInt(evento.target.textContent);
        //muestro el numero en la pantalla y se 
        visor.innerHTML = valorActual;
    });

    operation.addEventListener ('click', function(evento) {
        operacionEjecutar = evento.target.textContent;

        resultado= valorActual;

        visor.innerHTML = resultado;
    });

    igual.addEventListener ('click', function (evento){

        let operacion = todasLasOperaciones[operacionEjecutar];

        resultado=operacion(resultado, valorActual);

        visor.innerHTML = resultado;

    });
}

//escucho a que se cargue el documento para inicializar la calculadora

window.addEventListener('load', function()
{
    calculadora ();
});