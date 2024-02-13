/*ya no se utiliza por que utilizamos funciones con parametros
let parrafo = document.querySelector('p');//retorna la variable parrafo que guarda el mensaje
parrafo.innerHTML = 'Indica un numero del 1 al 10';//este es el mensaje
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {//recibe parametros
    //document es un puente que permite utilizar etiquetas de HTML como objetos
    let elementoHTML = document.querySelector(elemento);//retorna el h1 que esta en html
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//obtiene el valor del id del input
    // console.log(typeof(numeroDeUsuario)); //tipo de dato que ingresa el usuario
    //  console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    //  console.log(numeroDeUsuario);
    //   console.log(numeroDeUsuario === numeroSecreto);//igual en valor y en tipo de dato
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//limpia el campo con removeAtrribute
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    //  valorCaja.value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //  return numeroSecreto;//devuelve el numeroSecreto generado por math.random
        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {//includes verifica si un elemento esta dentro de la lista y devuelbe un false o true
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');//recibe le elemento y el texto
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar juego
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}
condicionesIniciales();