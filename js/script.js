// $(document).ready(function() {
//     $('.owl-carousel').owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 5
//             }
//         }
//     })
// });

// ----------EVALUACION DE EDAD USUARIO----------


// ________CONDICIONALES__________

// var numero1 = 5;
// var numero2 = 51;

// SI SE SUMPLE LA CONDICIÓN QUE ESTÁ ENTRE PARETESIS "()" VA A PASAR LO QUE YO LE DIGA ENTRE LAS LLAVES "{}"

// if (numero1 != numero2) {
//     // esto pasa si la condición se cumple
//     alert("Sí son diferentes! :)");
// }
//  SI LA CONDICIÓN NO SE CUMPLE, NO PASA NADA, PORQUE NO ESTAMOS UTILIZANDO "ELSE"


//---------------- EJERCICIO PARA REAFIRMAR LA SENTENCIA "IF"----------------

var edadUsuario = document.getElementById("edadUsuario");
var edadMaxima = 15;
var edadMinima = 10;
var traemeMensajeOk = document.getElementById("mensajeOk");
var traemeMensajeBu = document.getElementById("mensajeBu");

function evaluarEdad() {


    if (edadUsuario < edadMaxima && edadUsuario > edadMinima) {

        traemeMensajeOk.style.display = "block";
    } else {

        traemeMensajeBu.style.display = "block";
    }
};

function cerrarOK() {
    traemeMensajeOk.style.display = "none";
};

function cerrarBu() {
    traemeMensajeBu.style.display = "none";
};